export const wastes = [
	"Отработанные фильтры",
	"Металлолом",
	"Строительные отходы",
	"Отработанные масла",
	"Отработанные фильтры",
	"Буровой шлам",
	"Отработанный буровой раствор",
	"Отработанный рассол",
	"Нефтесодержащий шлам",
	"Пескоструйный песок",
	"Фильтрующий песок",
	"Ветошь промасленная",
	"Геомембрана",
	"Отходы пластмассы",
	"Коммунальные отходы",
	"Медицинские отходы",
	"Макулатура",
	"Картонно-деревянная упаковка",
	"Никель-кадмиевые аккумуляторы"
] as const

type Waste = typeof wastes[number]