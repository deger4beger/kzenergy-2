export enum AggregateState {
  SOLID = "Твёрдое",
  LIQUID = "Жидкое"
}

export enum MeasureSystem {
  TON = "тонна",
  M3 = "м3",
  ITEM = "штука"
}

export enum WasteDestinationType {
  A = "Захоронение",
  B = "Утилизация",
  C = "Переработка",
  D = "Передача подрядческой организации",
  E = "Повторное использование"
}

export enum TicketStatus {
  ACCEPTED = "Принят",
  REJECTED = "Отклонён",
  PENDING = "В ожидании"
}

export interface TicketPayload {
  wasteDestinationType: WasteDestinationType
  aggregateState: AggregateState
  measureSystem: MeasureSystem
  quantity: number
}