# learning-typescript

- O arquivo tsconfig.json **centraliza todas as regras de análise estática e de transpilação**
  e é importante configurá-lo de forma adequada, confomre as necessidades e políticas do projeto

- A opção **incremental** serve para habilitar a transpilação incremental, guardando uma cache que agiliza
  futuras transpilações especialmente em projetos muitos grandes.

- A opção **target** define qual é a versão da linguagem JavaScript que será ultilizada como
  destino da transpilação.

- A opção **module** é importante para definir o tipo de sistema de módulo que será ultilizado, sendo que os mais importantes são CommonJS ou
  os ES Modules, lançado no ES6.

> Union types

```ts
type Name = string | undefined
```

> Merge types

```ts
type Entity = {
  id: number
}

type Person = {
  name: string
  age: number
}

type PersonEntity = Person & Entity
```

> Supress Comment

- Ignora o typescript uma linha abaixo

```ts
// @ts-ignore
```

- Ignora o typescript no arquivo todo

```ts
// @ts-nocheck
```
