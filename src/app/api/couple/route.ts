import { NextRequest, NextResponse } from 'next/server';

interface AnalysisResult {
  id: string;
  name: string;
  astrology: {
    sunSign: string;
    moonSign: string;
    risingSign: string;
    merkurSign: string;
  };
  chineseZodiac: {
    animal: string;
    element: string;
  };
  numerology: {
    lifePath: number;
  };
  humanDesign: {
    type: string;
    strategy: string;
    authority: string;
    profile: string;
  };
}

interface CompatibilityScore {
  emotional: number;
  communication: number;
  lifeGoals: number;
  energy: number;
  spiritual: number;
}

interface CoupleCompatibility {
  person1: AnalysisResult;
  person2: AnalysisResult;
  overallScore: number;
  scores: CompatibilityScore;
  strengths: string[];
  growthAreas: string[];
  advice: {
    dailyRituals: string[];
    communication: string[];
    longTerm: string[];
  };
}

// Element mappings for astrology
const getElement = (sign: string): string => {
  const fireSignsMap = ['Widder', 'Löwe', 'Schütze'];
  const earthSignsMap = ['Stier', 'Jungfrau', 'Steinbock'];
  const airSignsMap = ['Zwillinge', 'Waage', 'Wassermann'];
  const waterSignsMap = ['Krebs', 'Skorpion', 'Fische'];
  
  if (fireSignsMap.includes(sign)) return 'Feuer';
  if (earthSignsMap.includes(sign)) return 'Erde';
  if (airSignsMap.includes(sign)) return 'Luft';
  if (waterSignsMap.includes(sign)) return 'Wasser';
  
  return 'Feuer'; // fallback
};

// Calculate element compatibility
const getElementCompatibility = (element1: string, element2: string): number => {
  if (element1 === element2) return 75; // Same element = good
  
  // Great combinations
  if ((element1 === 'Feuer' && element2 === 'Luft') || 
      (element1 === 'Luft' && element2 === 'Feuer')) return 90;
  
  if ((element1 === 'Erde' && element2 === 'Wasser') || 
      (element1 === 'Wasser' && element2 === 'Erde')) return 90;
  
  // Challenging combinations
  if ((element1 === 'Feuer' && element2 === 'Wasser') || 
      (element1 === 'Wasser' && element2 === 'Feuer')) return 45;
  
  if ((element1 === 'Erde' && element2 === 'Luft') || 
      (element1 === 'Luft' && element2 === 'Erde')) return 45;
  
  return 60; // neutral
};

// Calculate Human Design type compatibility
const getHumanDesignCompatibility = (type1: string, type2: string): number => {
  const typeCompatibility: Record<string, Record<string, number>> = {
    'Manifestor': {
      'Generator': 85,
      'Manifestierender Generator': 80,
      'Projektor': 75,
      'Reflektor': 70,
      'Manifestor': 65
    },
    'Generator': {
      'Manifestor': 85,
      'Generator': 80,
      'Manifestierender Generator': 90,
      'Projektor': 75,
      'Reflektor': 70
    },
    'Manifestierender Generator': {
      'Generator': 90,
      'Manifestor': 80,
      'Manifestierender Generator': 75,
      'Projektor': 70,
      'Reflektor': 65
    },
    'Projektor': {
      'Manifestor': 75,
      'Generator': 75,
      'Manifestierender Generator': 70,
      'Projektor': 60,
      'Reflektor': 80
    },
    'Reflektor': {
      'Manifestor': 70,
      'Generator': 70,
      'Manifestierender Generator': 65,
      'Projektor': 80,
      'Reflektor': 55
    }
  };

  return typeCompatibility[type1]?.[type2] || 60;
};

// Calculate life path number compatibility
const getLifePathCompatibility = (lifePath1: number, lifePath2: number): number => {
  const diff = Math.abs(lifePath1 - lifePath2);
  
  // Same life path
  if (diff === 0) return 85;
  
  // Complementary numbers
  if (diff === 2 || diff === 4) return 80;
  if (diff === 1 || diff === 3) return 75;
  
  // Master numbers compatibility
  if ([11, 22, 33].includes(lifePath1) && [11, 22, 33].includes(lifePath2)) return 90;
  if ([11, 22, 33].includes(lifePath1) || [11, 22, 33].includes(lifePath2)) return 70;
  
  return Math.max(50, 85 - diff * 5);
};

// Calculate Chinese zodiac compatibility
const getChineseZodiacCompatibility = (animal1: string, element1: string, animal2: string, element2: string): number => {
  // Element compatibility
  const elementScore = getElementCompatibility(element1, element2);
  
  // Animal compatibility (simplified)
  const animalCompatibility: Record<string, string[]> = {
    'Ratte': ['Drache', 'Affe'],
    'Büffel': ['Schlange', 'Hahn'],
    'Tiger': ['Pferd', 'Hund'],
    'Hase': ['Ziege', 'Schwein'],
    'Drache': ['Ratte', 'Affe'],
    'Schlange': ['Büffel', 'Hahn'],
    'Pferd': ['Tiger', 'Hund'],
    'Ziege': ['Hase', 'Schwein'],
    'Affe': ['Ratte', 'Drache'],
    'Hahn': ['Büffel', 'Schlange'],
    'Hund': ['Tiger', 'Pferd'],
    'Schwein': ['Hase', 'Ziege']
  };

  const animalScore = animalCompatibility[animal1]?.includes(animal2) ? 85 : 
                      animal1 === animal2 ? 75 : 60;

  return Math.round((elementScore + animalScore) / 2);
};

// Generate unique strengths based on sign combinations
const generateStrengths = (person1: AnalysisResult, person2: AnalysisResult): string[] => {
  const strengths: string[] = [];
  
  // Sun sign element compatibility
  const element1 = getElement(person1.astrology.sunSign);
  const element2 = getElement(person2.astrology.sunSign);
  
  if (getElementCompatibility(element1, element2) >= 80) {
    if ((element1 === 'Feuer' && element2 === 'Luft') || (element1 === 'Luft' && element2 === 'Feuer')) {
      strengths.push(`**Inspirierende Energie:** ${element1}-${element2} Kombination erzeugt kreative und motivierende Dynamik`);
    } else if ((element1 === 'Erde' && element2 === 'Wasser') || (element1 === 'Wasser' && element2 === 'Erde')) {
      strengths.push(`**Stabilisierende Verbindung:** ${element1}-${element2} Kombination schafft emotionale Sicherheit und Wachstum`);
    }
  }

  // Human Design compatibility
  const hdCompatibility = getHumanDesignCompatibility(person1.humanDesign.type, person2.humanDesign.type);
  if (hdCompatibility >= 80) {
    strengths.push(`**Energetische Synergie:** ${person1.humanDesign.type} und ${person2.humanDesign.type} ergänzen sich kraftvoll in ihrer Lebensweise`);
  }

  // Moon sign emotional connection
  if (person1.astrology.moonSign === person2.astrology.moonSign) {
    strengths.push(`**Emotionale Resonanz:** Beide haben ${person1.astrology.moonSign}-Mond und verstehen intuitiv die emotionalen Bedürfnisse des anderen`);
  } else if (getElementCompatibility(getElement(person1.astrology.moonSign), getElement(person2.astrology.moonSign)) >= 80) {
    strengths.push(`**Emotionale Ergänzung:** ${person1.astrology.moonSign}- und ${person2.astrology.moonSign}-Monde schaffen ausgewogene Gefühlsdynamik`);
  }

  // Life path compatibility
  if (getLifePathCompatibility(person1.numerology.lifePath, person2.numerology.lifePath) >= 80) {
    strengths.push(`**Gemeinsame Lebensvision:** Lebenswege ${person1.numerology.lifePath} und ${person2.numerology.lifePath} unterstützen gegenseitig spirituelles Wachstum`);
  }

  return strengths.slice(0, 4); // Max 4 strengths
};

// Generate growth areas based on compatibility challenges
const generateGrowthAreas = (person1: AnalysisResult, person2: AnalysisResult): string[] => {
  const growthAreas: string[] = [];
  
  // Human Design strategy differences
  if (person1.humanDesign.strategy !== person2.humanDesign.strategy) {
    growthAreas.push(`**Strategie-Harmonie:** ${person1.name} (${person1.humanDesign.strategy}) und ${person2.name} (${person2.humanDesign.strategy}) können voneinander lernen, ihre Ansätze zu ehren`);
  }

  // Authority differences
  if (person1.humanDesign.authority !== person2.humanDesign.authority) {
    growthAreas.push(`**Entscheidungsfindung:** ${person1.humanDesign.authority} und ${person2.humanDesign.authority} Autoritäten erfordern gegenseitiges Verständnis bei wichtigen Entscheidungen`);
  }

  // Element challenges
  const element1 = getElement(person1.astrology.sunSign);
  const element2 = getElement(person2.astrology.sunSign);
  
  if (getElementCompatibility(element1, element2) <= 50) {
    if ((element1 === 'Feuer' && element2 === 'Wasser') || (element1 === 'Wasser' && element2 === 'Feuer')) {
      growthAreas.push(`**Balance von Intensität:** ${element1} und ${element2} können sich gegenseitig überwältigen - bewusste Kommunikation ist wichtig`);
    } else if ((element1 === 'Erde' && element2 === 'Luft') || (element1 === 'Luft' && element2 === 'Erde')) {
      growthAreas.push(`**Tempo-Synchronisation:** ${element1} und ${element2} haben unterschiedliche Geschwindigkeiten - Geduld und Verständnis entwickeln`);
    }
  }

  return growthAreas.slice(0, 3); // Max 3 growth areas
};

// Generate personalized advice
const generateAdvice = (person1: AnalysisResult, person2: AnalysisResult) => {
  return {
    dailyRituals: [
      `Gemeinsame Morgen-Intentionen basierend auf euren ${person1.humanDesign.type}-${person2.humanDesign.type} Energien setzen`,
      `Regelmäßige emotionale Check-ins zwischen ${person1.astrology.moonSign}- und ${person2.astrology.moonSign}-Mond`,
      `Individuelle Verarbeitungszeit für eure unterschiedlichen Autoritäten respektieren`,
      `Gemeinsame Projekte die eure Lebenswege ${person1.numerology.lifePath} und ${person2.numerology.lifePath} unterstützen`
    ],
    communication: [
      `${person1.name}: Ehre ${person2.name}s ${person2.humanDesign.strategy}-Strategie`,
      `${person2.name}: Unterstütze ${person1.name}s ${person1.humanDesign.authority} Entscheidungsprozess`,
      `Beide: Versteht eure ${getElement(person1.astrology.sunSign)}-${getElement(person2.astrology.sunSign)} Elementdynamik`,
      `Heiligen Raum für eure unterschiedlichen Ausdrucksformen schaffen`
    ],
    longTerm: [
      `Gemeinsam etwas aufbauen, das beide Lebenswege unterstützt`,
      `Die einzigartige ${person1.astrology.sunSign}-${person2.astrology.sunSign} Kombination als Stärke nutzen`,
      `Ein Zuhause schaffen, das beide Human Design Typen nährt`,
      `Andere Paare durch eure authentische Partnerschaft inspirieren`
    ]
  };
};

export async function POST(request: NextRequest) {
  try {
    const { person1, person2 } = await request.json();

    if (!person1 || !person2) {
      return NextResponse.json(
        { error: 'Beide Personen-Analysen sind erforderlich' },
        { status: 400 }
      );
    }

    // Calculate individual compatibility scores
    const emotional = Math.round(
      getElementCompatibility(
        getElement(person1.astrology.moonSign), 
        getElement(person2.astrology.moonSign)
      )
    );

    const communication = Math.round(
      getElementCompatibility(
        getElement(person1.astrology.sunSign), 
        getElement(person2.astrology.sunSign)
      )
    );

    const lifeGoals = Math.round(
      getLifePathCompatibility(person1.numerology.lifePath, person2.numerology.lifePath)
    );

    const energy = Math.round(
      getHumanDesignCompatibility(person1.humanDesign.type, person2.humanDesign.type)
    );

    const spiritual = Math.round(
      (getElementCompatibility(
        getElement(person1.astrology.risingSign), 
        getElement(person2.astrology.risingSign)
      ) + 
      getChineseZodiacCompatibility(
        person1.chineseZodiac.animal, person1.chineseZodiac.element,
        person2.chineseZodiac.animal, person2.chineseZodiac.element
      )) / 2
    );

    const scores: CompatibilityScore = {
      emotional,
      communication,
      lifeGoals,
      energy,
      spiritual
    };

    // Calculate weighted overall score
    const overallScore = Math.round(
      (emotional * 0.25 + communication * 0.2 + lifeGoals * 0.2 + energy * 0.2 + spiritual * 0.15)
    );

    // Generate insights
    const strengths = generateStrengths(person1, person2);
    const growthAreas = generateGrowthAreas(person1, person2);
    const advice = generateAdvice(person1, person2);

    const result: CoupleCompatibility = {
      person1,
      person2,
      overallScore,
      scores,
      strengths,
      growthAreas,
      advice
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Couple compatibility error:', error);
    return NextResponse.json(
      { error: 'Fehler bei der Kompatibilitäts-Analyse' },
      { status: 500 }
    );
  }
}