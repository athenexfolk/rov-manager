export interface Hero {
  id: number,
  name: string,
  avatar: string,
  isUsed?: boolean
  lane: ('ROAM' | 'DSL' | 'ADL' | 'JGL' | 'MID')[]
}
