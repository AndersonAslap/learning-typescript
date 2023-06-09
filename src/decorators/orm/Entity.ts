export class Entity {
  declare schema: string
  declare table: string
  declare columns: { property: string; column: string }[];
  [key: string]: any
}
