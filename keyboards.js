const mainKeyboard = [
  [
    { text: 'Animals', callback_data: 'animals' },
    { text: 'Advices', callback_data: 'advices' },
  ],
  [
    { text: 'Artificially Generated', callback_data: 'artgen' },
    { text: 'Other', callback_data: 'other' },
  ],
];

const animalsKeyboard = [
  [
    { text: '😺 Cats', callback_data: 'cats' },
    { text: '🐶 Dogs', callback_data: 'dogs' },
  ],
  [
    { text: '🦊 Foxes', callback_data: 'foxes' },
    { text: '◀️ Back', callback_data: 'back' },
  ],
];

const advicesKeyboard = [
  [
    { text: '☝️ Just a usual advice', callback_data: 'advice' },
    { text: '🥱 Some activity', callback_data: 'bored' },
  ],
  [
    { text: '🧔🏿 Kanye West quote', callback_data: 'kanye' },
    { text: '◀️ Back', callback_data: 'back' },
  ],
];

const artgenKeyboard = [
  [
    { text: '👨 People', callback_data: 'smbd' },
    { text: '😼 Cats', callback_data: 'smct' },
  ],
  [
    { text: '🖼 Art', callback_data: 'smrt' },
    { text: '◀️ Back', callback_data: 'back' },
  ],
];

const otherKeyboard = [
  [
    { text: '🔢 Numbers', callback_data: 'num' },
    { text: '🍕 Food', callback_data: 'food' },
  ],
  [{ text: '◀️ Back', callback_data: 'back' }],
];

module.exports = { mainKeyboard, animalsKeyboard, advicesKeyboard, artgenKeyboard, otherKeyboard };
