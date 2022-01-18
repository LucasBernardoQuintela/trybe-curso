const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDMG = () => {
  const max = Object.values(dragon)[1];
  for (let i = 0; i < 1; i += 0) {
    const random = Math.floor(Math.random() * max);
    if (random >= 15) {
      return random;
    }
  }
}

const warriorDMG = () => {
  const min = Object.values(warrior)[1];
  const max = min * Object.values(warrior)[2];
  for (let i = 0; i < 1; i += 0) {
    const random = Math.floor(Math.random() * max);
    if (random >= min) {
      return random;
    }
  }
}

const mageDMG = () => {
  const min = Object.values(mage)[1];
  const max = min * 2;
  const mana = Object.values(mage)[2];
  for (let i =0; i < 1; i += 0) {
    const random = Math.floor(Math.random() * max);
    if (random >= min) {
      return {damage: random, mana: (mana - 15)};
    }
  }
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (func) => {
    const dmg = func();
    warrior.damage = dmg;
    const drgHP = Object.values(dragon)[0] - dmg;
    dragon.healthPoints = drgHP;
    return dmg;
  },
  mageTurn: (func) => {
    const obj = func();
    const dmg = Object.values(obj)[0];
    mage.damage = dmg;
    const mana = Object.values(obj)[1];
    mage.mana = mana;
    const drgHP = Object.values(dragon)[0] - dmg;
    dragon.healthPoints = drgHP;
    return dmg;
  },
  dragonTurn: (func) => {
    const dmg = func();
    dragon.damage = dmg;
    const mageHp = Object.values(mage)[0];
    mage.healthPoints = mageHp - dmg;
    const warriorHp = Object.values(warrior)[0];
    warrior.healthPoints = warriorHp - dmg;
    return dmg;
  },
  result: () => battleMembers,
};

console.log(gameActions.warriorTurn(warriorDMG));
console.log(gameActions.mageTurn(mageDMG));
console.log(gameActions.dragonTurn(dragonDMG));
console.log(gameActions.result());