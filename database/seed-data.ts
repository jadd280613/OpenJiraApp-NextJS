interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Pendiente: Cillum ea do consectetur ut nostrud reprehenderit consequat veniam.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'En progreso: Duis exercitation proident irure exercitation non eu sint enim excepteur anim tempor do.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'Terminadas: Aliquip cupidatat fugiat ex aliqua incididunt et ea aliqua est in est veniam.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
