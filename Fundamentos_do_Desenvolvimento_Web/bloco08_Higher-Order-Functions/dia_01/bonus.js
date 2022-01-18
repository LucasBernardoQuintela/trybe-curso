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
  const Hp = Object.values(dragon)[0];
  if (Hp > 0) {
    const max = Object.values(dragon)[1];
    for (let i = 0; i < 1; i += 0) {
      const random = Math.floor(Math.random() * max);
      if (random >= 15) {
        return random;
      }
    }
  }
  return 0;
}

const warriorDMG = () => {
  const Hp = Object.values(warrior)[0];
  if (Hp > 0) {
    const min = Object.values(warrior)[1];
    const max = min * Object.values(warrior)[2];
    for (let i = 0; i < 1; i += 0) {
      const random = Math.floor(Math.random() * max);
      if (random >= min) {
        return random;
      }
    }
  }
  return 0;
}

const mageDMG = () => {
  const Hp = Object.values(mage)[0];
  if (Hp > 0) {
    const mana = Object.values(mage)[2];
    if (mana >= 15) {
      const min = Object.values(mage)[1];
      const max = min * 2;
      for (let i =0; i < 1; i += 0) {
        const random = Math.floor(Math.random() * max);
        if (random >= min) {
          return {damage: random, mana: (mana - 15)};
        }
      }
    }
  }
  return {damage: 0, mana: mana};
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
    const mana = Object.values(obj)[1];
    const dmg = Object.values(obj)[0];
    mage.damage = dmg;
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

// console.log(gameActions.warriorTurn(warriorDMG));
// console.log(gameActions.mageTurn(mageDMG));
// console.log(gameActions.dragonTurn(dragonDMG));
// console.log(gameActions.result());

const EveryOneAlive = (round) => {
  console.log(`----------------------Round ${round}-----------------------`)
  // Guerreiro ataca!
  const guerreiro = gameActions.warriorTurn(warriorDMG);
  let dragonAfterAttack = Object.values(dragon)[0];
  console.log(`----------------------------------------------------
  O Guerreiro ataca e causa ${guerreiro} de dano
  O dragão agora tem ${dragonAfterAttack} de vida
  ----------------------------------------------------`);

  // Mago ataca!
  const mago = gameActions.mageTurn(mageDMG);
  dragonAfterAttack = Object.values(dragon)[0];
  console.log(`----------------------------------------------------
  O Mago ataca e causa ${mago} de dano
  O dragão agora tem ${dragonAfterAttack} de vida
  ----------------------------------------------------`);
  
  // Dragão ataca!!!
  const dragão = gameActions.dragonTurn(dragonDMG);
  const warriorAfterAttack = Object.values(warrior)[0];
  const mageAfterAttack = Object.values(mage)[0];
  console.log(`----------------------------------------------------
  O Dragão ataca e causa ${dragão} de dano
  O Guerreiro agora tem ${warriorAfterAttack} de vida
  O Mago agora tem ${mageAfterAttack} de vida
  ----------------------------------------------------`);
}

const OnlyWarriorAlive = (round) => {
  console.log(`----------------------Round ${round}-----------------------`)
  // Guerreiro ataca!
  const guerreiro = gameActions.warriorTurn(warriorDMG);
  let dragonAfterAttack = Object.values(dragon)[0];
  console.log(`----------------------------------------------------
  O Guerreiro ataca e causa ${guerreiro} de dano
  O dragão agora tem ${dragonAfterAttack} de vida
  ----------------------------------------------------`);

  // Mago ataca!
  console.log(`----------------------------------------------------
  O Mago está morto
  O dragão agora tem ${dragonAfterAttack} de vida
  ----------------------------------------------------`);
  
  // Dragão ataca!!!
  const dragão = gameActions.dragonTurn(dragonDMG);
  const warriorAfterAttack = Object.values(warrior)[0];
  const mageAfterAttack = Object.values(mage)[0];
  console.log(`----------------------------------------------------
  O Dragão ataca e causa ${dragão} de dano
  O Guerreiro agora tem ${warriorAfterAttack} de vida
  O Mago agora tem ${mageAfterAttack} de vida
  ----------------------------------------------------`);
}

const OnlyMageAlive = (round) => {
  console.log(`----------------------Round ${round}-----------------------`)
  // Guerreiro ataca!
  let dragonAfterAttack = Object.values(dragon)[0];
  console.log(`----------------------------------------------------
  O Guerreiro está morto.
  O dragão agora tem ${dragonAfterAttack} de vida
  ----------------------------------------------------`);

  // Mago ataca!
  const mago = gameActions.mageTurn(mageDMG);
  dragonAfterAttack = Object.values(dragon)[0];
  console.log(`----------------------------------------------------
  O Mago ataca e causa ${mago} de dano
  O dragão agora tem ${dragonAfterAttack} de vida
  ----------------------------------------------------`);
  
  // Dragão ataca!!!
  const dragão = gameActions.dragonTurn(dragonDMG);
  const warriorAfterAttack = Object.values(warrior)[0];
  const mageAfterAttack = Object.values(mage)[0];
  console.log(`----------------------------------------------------
  O Dragão ataca e causa ${dragão} de dano
  O Guerreiro agora tem ${warriorAfterAttack} de vida
  O Mago agora tem ${mageAfterAttack} de vida
  ----------------------------------------------------`);
}

const results = (resultado) => {
  if (resultado == 0) {
    return`O dragão saiu vitorioso....
    Dessa vez.`;
  }
  if (resultado == 1) {
    return `--------------------------------------------------------------------------------
    O dragão foi derrotado e a vitória de nossos guerreiros será comemorada!
    --------------------------------------------------------------------------------`;
  }
}

const playGame = () => {
  let round = 1;
  for (let i = 0; i < 1; i += 0) {
    const dragonHp = Object.values(dragon)[0];
    const warriorHp = Object.values(warrior)[0];
    const mageHp = Object.values(mage)[0];
    if (dragonHp > 0 && warriorHp <= 0 && mageHp <= 0) {
      return results(0);
    } else if (dragonHp <= 0 && (warriorHp > 0 || mageHp > 0)) {
      return results(1);
    } else if (dragonHp > 0) {
      if (warriorHp > 0 && mageHp > 0) {
        EveryOneAlive(round);
      } else if (warriorHp > 0) {
        OnlyWarriorAlive(round);
      } else if (mageHp > 0) {
        OnlyMageAlive(round);
      }
    }
    round += 1;
  }
  return round;
}

console.log(playGame());