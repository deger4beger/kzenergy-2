import { Waste } from "lib/assets/data/waste"

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

export enum TalonStatus {
  ACCEPTED = "Принят",
  REJECTED = "Отклонён",
  PENDING = "В ожидании"
}

export interface Talon {
  id: string
  date: string
  wasteName: Waste
  wasteDestinationType: WasteDestinationType
  aggregateState: AggregateState
  measureSystem: MeasureSystem
  quantity: number
  status: TalonStatus
  excelUrl: string | null
  message: string | null
}

export interface TalonMini extends Pick<Talon, "id" | "wasteName" | "status" | "date"> {}

export interface TalonPayload extends Pick<
  Talon,
  "wasteDestinationType" | "aggregateState" | "measureSystem" | "quantity" | "wasteName"
> {}

export interface PatchTalonStatusPayload extends Pick<
  Talon,
  "status" | "message"
> {}