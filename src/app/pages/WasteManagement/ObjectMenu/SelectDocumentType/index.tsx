import s from "./index.module.scss"
import cn from "classnames"
import { DocumentType } from ".."

interface Props {
	documentType: DocumentType
	setDocumentType: (documentType: DocumentType) => void
}

interface DocumentData {
	id: DocumentType
	title: string
	onClick: () => void
}

const SelectDocumentType: React.FC<Props> = ({
	documentType,
	setDocumentType
}) => {

	const documentsBtnData: DocumentData[] = [
		{
			id: "ticket",
			title: "Создать талон",
			onClick: () => setDocumentType("ticket")
		},
		{
			id: "report",
			title: "Создать отчет",
			onClick: () => setDocumentType("report")
		}
	]

	return (
		<div className={s.wrapper}>
			{ documentsBtnData.map(doc =>
				<div className={cn(s.btn, {
					[s.active]: doc.id === documentType
				})} onClick={ doc.onClick }>
					{ doc.title }
				</div>
			) }
		</div>
	)
}

export default SelectDocumentType