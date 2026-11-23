import type { ManufacturingProcessStep } from '../types';

export const MANUFACTURING_PROCESS: ManufacturingProcessStep[] = [
  {
    step: '01',
    title: 'Botanical Sourcing & Terroir Audit',
    subtitle: 'From Tamil Nadu Orchards to Laboratory',
    duration: 'Weeks 1–2',
    description: 'Direct procurement of hand-picked Madurai Sambac Jasmine at pre-dawn, sun-cured Pollachi vanilla beans, high-altitude Nilgiris botanicals, and sustainably harvested agarwood. Each harvest lot undergoes sensory and terroir fingerprinting.',
    standards: 'Terroir verification, moisture indexing, and botanical authenticity profiling.',
    iconName: 'Sprout'
  },
  {
    step: '02',
    title: 'Extraction & Artisanal Distillation',
    subtitle: 'Cold Enfleurage & Supercritical CO2',
    duration: 'Weeks 3–4',
    description: 'Delicate floral and resinous absolutes are yielded through low-temperature enfleurage, steam distillation, and eco-friendly supercritical CO2 extraction to preserve volatile top-notes without thermal degradation.',
    standards: 'Zero-thermal destruction protocols, food-grade solvent-free purity.',
    iconName: 'Droplet'
  },
  {
    step: '03',
    title: 'Olfactive Formulation & Accord Creation',
    subtitle: 'Master Perfumer Creative Synthesis',
    duration: 'Weeks 5–7',
    description: 'Our nose and formulation team sculpt the three-tier olfactory pyramid (Top, Heart, and Base), balancing vaporization curves, sillage projection, and skin intimacy. Iterative sampling achieves exact harmony.',
    standards: 'IFRA 51st Amendment adherence, gas chromatography mass spectrometry (GC-MS).',
    iconName: 'FlaskConical'
  },
  {
    step: '04',
    title: 'Maceration & Controlled Aging',
    subtitle: 'The Resting Period in Dark Stainless Tanks',
    duration: 'Weeks 8–12',
    description: 'Raw concentrate is married with pharmaceutical-grade neutral grain spirit and aged in temperature-controlled dark chambers. Molecules cross-bind, softening alcohol harshness and unlocking velvety depth.',
    standards: 'Continuous climate control (14°C ± 1°C), nitrogen-flushed preservation.',
    iconName: 'Clock'
  },
  {
    step: '05',
    title: 'Cryo-Filtration & Clarification',
    subtitle: 'Sub-Zero Chilling for Crystalline Radiance',
    duration: 'Week 13',
    description: 'The perfume blend is chilled to -4°C to induce precipitation of microscopic waxes and natural botanical sediments, followed by multi-stage membrane filtration to guarantee flawless optical clarity.',
    standards: '0.2-micron membrane filtration, zero hazing stability testing at 45°C & 4°C.',
    iconName: 'Snowflake'
  },
  {
    step: '06',
    title: 'Automated Cleanroom Bottling',
    subtitle: 'Precision Volumetric Filling',
    duration: 'Week 14',
    description: 'Bottling occurs within ISO-certified laminar clean air enclosures. High-accuracy volumetric filling prevents oxidation, followed by automated pneumatic pump crimping with zero aerosol loss.',
    standards: 'Class 10,000 cleanroom environment, torque-controlled crimp verification.',
    iconName: 'ShieldCheck'
  },
  {
    step: '07',
    title: 'Cap Seating, Labeling & Finishing',
    subtitle: 'Artisanal Assembly & Haptic Inspection',
    duration: 'Week 15',
    description: 'Weighted metal caps, magnetic alignment closures, embossed luxury foil labels, and serial number imprints are meticulously set and inspected by our finishing artisans.',
    standards: '100% individual cosmetic inspection, laser seal alignment checks.',
    iconName: 'CheckCircle2'
  },
  {
    step: '08',
    title: 'Luxury Rigid Box Packaging & Vault Dispatch',
    subtitle: 'Secondary Packaging & Global Logistics',
    duration: 'Week 16',
    description: 'Flacons are nestled into custom foam-lined rigid presentation boxes, sealed with tamper-evident hot foil bands, and packaged into temperature-controlled export master cartons.',
    standards: 'Drop-test certified master cartons, humidity-shielded barcoding.',
    iconName: 'PackageCheck'
  }
];
