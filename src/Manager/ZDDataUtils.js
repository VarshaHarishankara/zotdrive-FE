

export const getFoldersAndFiles = (data) => {
    let folderList = []
    let fileList = []
    data && data.map((item)=>{
        if(item.folder){
            folderList.push(item)
        }else{
            fileList.push(item)
        }
    })

    return {
        folders: folderList,
        files: fileList
    }
}