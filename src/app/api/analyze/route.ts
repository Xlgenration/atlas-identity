import { NextRequest, NextResponse } from 'next/server';

interface AnalysisRequest {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}

interface AnalysisResult {
  id: string;
  name: string;
  birthData: {
    date: string;
    time: string;
    place: string;
  };
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
  personality: {
    overview: string;
    strengths: string[];
    growthAreas: string[];
    traits: string[];
  };
  descriptions: {
    astrological: string;
    humanDesign: string;
    integration: string;
  };
  environments: string[];
  relationships: string[];
}

// Zodiac sign calculations
const getZodiacSign = (month: number, day: number): string => {
  const signs = [
    { name: 'Steinbock', start: [12, 22], end: [1, 19] },
    { name: 'Wassermann', start: [1, 20], end: [2, 18] },
    { name: 'Fische', start: [2, 19], end: [3, 20] },
    { name: 'Widder', start: [3, 21], end: [4, 19] },
    { name: 'Stier', start: [4, 20], end: [5, 20] },
    { name: 'Zwillinge', start: [5, 21], end: [6, 20] },
    { name: 'Krebs', start: [6, 21], end: [7, 22] },
    { name: 'Löwe', start: [7, 23], end: [8, 22] },
    { name: 'Jungfrau', start: [8, 23], end: [9, 22] },
    { name: 'Waage', start: [9, 23], end: [10, 22] },
    { name: 'Skorpion', start: [10, 23], end: [11, 21] },
    { name: 'Schütze', start: [11, 22], end: [12, 21] }
  ];

  for (const sign of signs) {
    if (sign.name === 'Steinbock') {
      // Special case for Capricorn (spans year boundary)
      if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return sign.name;
      }
    } else {
      const [startMonth, startDay] = sign.start;
      const [endMonth, endDay] = sign.end;
      
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return sign.name;
      }
    }
  }
  
  return 'Steinbock'; // fallback
};

// Moon sign calculation (simplified - based on lunar cycle approximation)
const getMoonSign = (birthDate: Date, birthTime: string): string => {
  const signs = ['Widder', 'Stier', 'Zwillinge', 'Krebs', 'Löwe', 'Jungfrau', 'Waage', 'Skorpion', 'Schütze', 'Steinbock', 'Wassermann', 'Fische'];
  
  // Reference new moon: January 1, 2000 was approximately new moon
  const refDate = new Date('2000-01-01');
  const daysDiff = Math.floor((birthDate.getTime() - refDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // Lunar cycle is approximately 29.53 days
  const lunarCycle = 29.53;
  const cyclePosition = (daysDiff % lunarCycle) / lunarCycle;
  
  // Add time offset (each hour shifts position slightly)
  const [hour] = birthTime.split(':').map(Number);
  const timeOffset = (hour / 24) * 0.1; // Small time-based adjustment
  
  const signIndex = Math.floor((cyclePosition + timeOffset) * 12) % 12;
  return signs[signIndex];
};

// Rising/Ascending sign calculation (simplified - based on birth hour)
const getRisingSign = (birthTime: string): string => {
  const signs = ['Widder', 'Stier', 'Zwillinge', 'Krebs', 'Löwe', 'Jungfrau', 'Waage', 'Skorpion', 'Schütze', 'Steinbock', 'Wassermann', 'Fische'];
  
  const [hour] = birthTime.split(':').map(Number);
  // Each sign rules approximately 2 hours
  const signIndex = Math.floor(hour / 2) % 12;
  return signs[signIndex];
};

// Chinese zodiac calculation
const getChineseZodiac = (year: number): { animal: string, element: string } => {
  const animals = ['Ratte', 'Büffel', 'Tiger', 'Hase', 'Drache', 'Schlange', 'Pferd', 'Ziege', 'Affe', 'Hahn', 'Hund', 'Schwein'];
  const elements = ['Metall', 'Wasser', 'Holz', 'Feuer', 'Erde'];
  
  // Chinese zodiac starts from 1900 = Ratte
  const animalIndex = (year - 1900) % 12;
  // Elements cycle every 2 years
  const elementIndex = Math.floor((year - 1900) % 10 / 2);
  
  return {
    animal: animals[animalIndex],
    element: elements[elementIndex]
  };
};

// Numerology life path calculation
const getLifePath = (birthDate: Date): number => {
  const dateStr = birthDate.toISOString().split('T')[0].replace(/-/g, '');
  let sum = 0;
  
  for (const digit of dateStr) {
    sum += parseInt(digit);
  }
  
  // Reduce to single digit, but preserve master numbers 11, 22, 33
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    const digits = sum.toString().split('');
    sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  
  return sum;
};

// Human Design type calculation (simplified)
const getHumanDesignType = (sunSign: string, birthTime: string): { type: string, strategy: string, authority: string, profile: string } => {
  const [hour] = birthTime.split(':').map(Number);
  
  // Simplified mapping based on sun sign and birth hour
  const fireSignsHour = ['Widder', 'Löwe', 'Schütze'].includes(sunSign);
  const earlyMorning = hour >= 6 && hour < 12;
  const afternoon = hour >= 12 && hour < 18;
  
  if (fireSignsHour && earlyMorning) {
    return { type: 'Manifestor', strategy: 'Informieren', authority: 'Emotional', profile: '3/5' };
  } else if (earlyMorning) {
    return { type: 'Generator', strategy: 'Antworten', authority: 'Sakral', profile: '2/4' };
  } else if (afternoon) {
    return { type: 'Manifestierender Generator', strategy: 'Antworten & Informieren', authority: 'Sakral', profile: '1/3' };
  } else if (hour >= 18 && hour < 22) {
    return { type: 'Projektor', strategy: 'Auf Einladung warten', authority: 'Milz', profile: '4/6' };
  } else {
    return { type: 'Reflektor', strategy: 'Einen Mondzyklus warten', authority: 'Lunar', profile: '6/2' };
  }
};

// Generate unique descriptions based on calculated data
const generateDescriptions = (data: any): any => {
  const { sunSign, moonSign, risingSign } = data.astrology;
  const { type } = data.humanDesign;
  
  const sunDescriptions: Record<string, string> = {
    'Widder': 'Deine Widder-Sonne verleiht dir Pioniergeist und natürliche Führungsqualitäten',
    'Stier': 'Deine Stier-Sonne gibt dir Stabilität und einen praktischen, erdverbundenen Ansatz',
    'Zwillinge': 'Deine Zwillinge-Sonne macht dich kommunikativ und vielseitig interessiert',
    'Krebs': 'Deine Krebs-Sonne verleiht dir emotionale Tiefe und intuitive Einsicht',
    'Löwe': 'Deine Löwe-Sonne verleiht dir natürliche Führungsqualitäten und eine magnetische Ausstrahlung',
    'Jungfrau': 'Deine Jungfrau-Sonne gibt dir analytische Fähigkeiten und den Wunsch nach Perfektion',
    'Waage': 'Deine Waage-Sonne verleiht dir Harmonie-Sinn und diplomatische Fähigkeiten',
    'Skorpion': 'Deine Skorpion-Sonne gibt dir emotionale Tiefe und transformative Kraft',
    'Schütze': 'Deine Schütze-Sonne macht dich optimistisch und abenteuerlustig',
    'Steinbock': 'Deine Steinbock-Sonne verleiht dir Disziplin und langfristige Zielorientierung',
    'Wassermann': 'Deine Wassermann-Sonne macht dich innovativ und unabhängig denkend',
    'Fische': 'Deine Fische-Sonne verleiht dir Intuition und emotionale Sensibilität'
  };

  const moonDescriptions: Record<string, string> = {
    'Widder': 'dein impulsiver und direkter emotionaler Ausdruck',
    'Stier': 'dein Bedürfnis nach emotionaler Sicherheit und Beständigkeit',
    'Zwillinge': 'deine emotionale Neugier und kommunikativen Bedürfnisse',
    'Krebs': 'deine tiefe emotionale Sensibilität und Fürsorglichkeit',
    'Löwe': 'dein Bedürfnis nach emotionaler Anerkennung und Ausdruck',
    'Jungfrau': 'deine emotionale Ordnung und praktische Herangehensweise an Gefühle',
    'Waage': 'dein Bedürfnis nach emotionaler Harmonie und Ausgeglichenheit',
    'Skorpion': 'deine tiefe emotionale Intensität und intuitive Einsicht',
    'Schütze': 'deine emotionale Begeisterungsfähigkeit und Optimismus',
    'Steinbock': 'deine emotionale Disziplin und strukturierte Gefühlswelt',
    'Wassermann': 'deine emotionale Unabhängigkeit und innovativen Gefühlsausdruck',
    'Fische': 'deine emotionale Empathie und spirituelle Verbindung'
  };

  const humanDesignDescriptions: Record<string, string> = {
    'Manifestor': 'Als Manifestor bist du dafür gemacht, Dinge zu initiieren und Impact zu erzeugen. Du hast die kraftvolle Fähigkeit, Veränderung zu bewirken und andere zu inspirieren.',
    'Generator': 'Als Generator besitzt du eine konstante Lebenskraft und bist hier, um durch deine Arbeit Erfüllung zu finden. Deine Energie ist magnetisch und zieht die richtigen Möglichkeiten an.',
    'Manifestierender Generator': 'Als Manifestierender Generator kombinierst du die Initiationskraft des Manifestors mit der nachhaltigen Energie des Generators. Du bist ein Multi-Talent mit vielfältigen Interessen.',
    'Projektor': 'Als Projektor bist du ein natürlicher Guide und Berater. Du siehst Systeme und Menschen klar und kannst andere dabei unterstützen, ihre Effizienz und Erfolg zu steigern.',
    'Reflektor': 'Als Reflektor bist du ein seltener Typ, der die Energie der Umgebung widerspiegelt. Du hast die einzigartige Gabe, die Gesundheit von Communities und Systemen zu erfassen.'
  };

  const astrological = `${sunDescriptions[sunSign]}. Kombiniert mit deinem ${moonSign}-Mond zeigt sich ${moonDescriptions[moonSign]}.`;
  
  const humanDesignDesc = humanDesignDescriptions[type];

  return {
    astrological,
    humanDesign: humanDesignDesc,
    integration: `Deine einzigartige Kombination aus ${sunSign}-Sonne, ${moonSign}-Mond und ${risingSign}-Aszendent mit deiner ${type}-Energie schafft eine kraftvolle Persönlichkeit. Du bist hier, um deine authentische Natur zu leben und anderen zu helfen, ihre eigene Wahrheit zu entdecken.`
  };
};

// Generate personality traits based on signs
const generatePersonality = (astrology: any, humanDesign: any, numerology: any) => {
  const { sunSign, moonSign } = astrology;
  const { type } = humanDesign;
  
  const traits: Record<string, string[]> = {
    'Widder': ['Pionier', 'Mutig', 'Direkt'],
    'Stier': ['Beständig', 'Praktisch', 'Zuverlässig'],
    'Zwillinge': ['Kommunikativ', 'Vielseitig', 'Neugierig'],
    'Krebs': ['Einfühlsam', 'Schützend', 'Intuitiv'],
    'Löwe': ['Charismatisch', 'Kreativ', 'Selbstbewusst'],
    'Jungfrau': ['Analytisch', 'Präzise', 'Hilfsbereit'],
    'Waage': ['Harmonisch', 'Diplomatisch', 'Ästhetisch'],
    'Skorpion': ['Intensiv', 'Transformativ', 'Tiefgreifend'],
    'Schütze': ['Optimistisch', 'Abenteuerlustig', 'Philosophisch'],
    'Steinbock': ['Diszipliniert', 'Ambitioniert', 'Strukturiert'],
    'Wassermann': ['Innovativ', 'Unabhängig', 'Visionär'],
    'Fische': ['Empathisch', 'Kreativ', 'Spirituell']
  };

  const typeTraits: Record<string, string[]> = {
    'Manifestor': ['Initiator', 'Unabhängig', 'Kraftvoll'],
    'Generator': ['Ausdauernd', 'Magnetisch', 'Reaktiv'],
    'Manifestierender Generator': ['Multi-Talent', 'Effizient', 'Vielseitig'],
    'Projektor': ['Führend', 'Einsichtsvoll', 'Beratend'],
    'Reflektor': ['Reflektierend', 'Sensibel', 'Weise']
  };

  const selectedTraits = [
    ...traits[sunSign] || [],
    ...traits[moonSign] || [],
    ...typeTraits[type] || []
  ].slice(0, 6);

  const strengthsMap: Record<string, string[]> = {
    'Manifestor': ['Natürliche Führung: Du inspirierst andere durch deine Vision und authentischen Ausdruck', 'Initiationskraft: Du kannst Projekte starten und Veränderung bewirken', 'Unabhängigkeit: Du findest deinen eigenen Weg und folgst deiner inneren Führung'],
    'Generator': ['Nachhaltige Energie: Du hast Ausdauer für die Dinge, die dich begeistern', 'Magnetische Anziehung: Du ziehst die richtigen Möglichkeiten und Menschen an', 'Freude an der Arbeit: Du findest Erfüllung in dem, was du tust'],
    'Manifestierender Generator': ['Multi-Tasking: Du kannst mehrere Projekte gleichzeitig verfolgen', 'Effizienz: Du findest schnelle Wege zum Ziel', 'Anpassungsfähigkeit: Du kannst dich flexibel an neue Situationen anpassen'],
    'Projektor': ['Natürliche Führung: Du siehst das große Ganze und kannst andere leiten', 'Systemverständnis: Du erkennst, wie Dinge funktionieren und optimiert werden können', 'Beratende Gabe: Du hilfst anderen dabei, ihr Potenzial zu erkennen'],
    'Reflektor': ['Tiefe Weisheit: Du verstehst die Zyklen und Rhythmen des Lebens', 'Objektive Sicht: Du siehst Situationen ohne emotionale Verzerrung', 'Community-Gefühl: Du spürst die Gesundheit von Gruppen und Systemen']
  };

  const growthAreasMap: Record<string, string[]> = {
    'Manifestor': ['Geduld mit dem Prozess: Lerne andere zu informieren, bevor du große Schritte machst', 'Emotionale Autorität: Nimm dir Zeit für wichtige Entscheidungen', 'Energiemanagement: Balance deinen intensiven Antrieb mit ausreichend Ruhe'],
    'Generator': ['Auf den Körper hören: Folge deiner sakralen Antwort anstatt dem Verstand', 'Geduld mit dem Timing: Warte auf die richtigen Gelegenheiten', 'Grenzen setzen: Lerne Nein zu sagen, wenn etwas nicht stimmt'],
    'Manifestierender Generator': ['Fokus entwickeln: Konzentration auf weniger Projekte für tiefere Resultate', 'Frustrationsmanagement: Erkenne, wann es Zeit ist, Richtung zu wechseln', 'Kommunikation: Informiere andere über deine Pläne und Veränderungen'],
    'Projektor': ['Auf Einladung warten: Erkenne den richtigen Zeitpunkt für deine Führung', 'Energiemanagement: Ruhe und Erholung sind essentiell für dich', 'Bitterkeit loslassen: Vertraue darauf, dass die richtige Anerkennung kommt'],
    'Reflektor': ['Monatszyklus ehren: Nimm dir einen Monat für wichtige Entscheidungen', 'Umgebung bewusst wählen: Du bist sehr sensibel für deine Umgebung', 'Enttäuschung transformieren: Nutze deine Sensibilität als Stärke']
  };

  return {
    overview: `Du bist eine einzigartige Kombination aus ${sunSign}-Energie und ${type}-Typ. Diese Mischung macht dich zu einer besonderen Persönlichkeit mit kraftvollen Fähigkeiten und tiefem Potenzial.`,
    strengths: strengthsMap[type] || [],
    growthAreas: growthAreasMap[type] || [],
    traits: selectedTraits
  };
};

export async function POST(request: NextRequest) {
  try {
    const body: AnalysisRequest = await request.json();
    const { name, birthDate, birthTime, birthPlace } = body;

    // Parse birth date
    const birth = new Date(birthDate);
    const month = birth.getMonth() + 1;
    const day = birth.getDate();
    const year = birth.getFullYear();

    // Calculate all astrological data
    const sunSign = getZodiacSign(month, day);
    const moonSign = getMoonSign(birth, birthTime);
    const risingSign = getRisingSign(birthTime);
    const merkurSign = getZodiacSign(month, (day + 3) % 31 || 1); // Simplified Merkur approximation
    const chineseZodiac = getChineseZodiac(year);
    const lifePath = getLifePath(birth);
    const humanDesign = getHumanDesignType(sunSign, birthTime);

    // Create analysis result
    const astrology = { sunSign, moonSign, risingSign, merkurSign };
    const numerology = { lifePath };
    
    const personality = generatePersonality(astrology, humanDesign, numerology);
    const descriptions = generateDescriptions({ astrology, humanDesign });

    // Generate deterministic ID
    const id = `${name.toLowerCase().replace(/\s+/g, '')}-${birthDate.replace(/-/g, '')}-${birthTime.replace(/:/g, '')}`;

    const result: AnalysisResult = {
      id,
      name,
      birthData: {
        date: birthDate,
        time: birthTime,
        place: birthPlace
      },
      astrology,
      chineseZodiac,
      numerology,
      humanDesign,
      personality,
      descriptions,
      environments: [
        'Führungsrollen in der Transformation',
        'Kreative und innovative Bereiche', 
        'Coaching und Beratung',
        'Unternehmerische Projekte'
      ],
      relationships: [
        'Partner die deine Authentizität schätzen',
        'Mitarbeiter die deiner Vision folgen',
        'Mentoren die deinen Weg verstehen',
        'Communities die Wachstum fördern'
      ]
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Fehler bei der Analyse' },
      { status: 500 }
    );
  }
}