export type InfusionInput = {
  drugId: string;
  doseMg: number;
  volumeMl: number;
  administrationNumber: number;
};

export type InfusionStep = {
  rateMlPerHour: number;
  durationMinutes: number;
};

// La generación de pasos depende del protocolo validado de cada fármaco.
