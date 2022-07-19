import FileSaver from "file-saver"

export const downloadFile = (url: string, fileName: string) => {
	FileSaver.saveAs( url, fileName )
}