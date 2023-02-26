import { v4 as uuidv4 } from 'uuid';

export const mockData = {
  todo: [
    {
      uuid: uuidv4(),
      title: 'Angular',
    },
    {
      uuid: uuidv4(),
      title: 'React',
    },
    {
      uuid: uuidv4(),
      title: 'Vue',
    },
  ],

  inprogress: [
    {
      uuid: uuidv4(),
      title: 'Node.js',
    },
    {
      uuid: uuidv4(),
      title: 'Express.js',
    },
  ],

  done: [
    {
      uuid: uuidv4(),
      title: 'Dotnet',
    },
    {
      uuid: uuidv4(),
      title: 'MongoDB',
    },
  ],
};
