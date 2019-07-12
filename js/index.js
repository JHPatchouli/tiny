var testEditor;
    $(function () {
        testEditor = editormd("test-editormd", {//加载编辑器外部div的ID值
            width: "100%",//设置编辑器的宽度
            height: 640,
            syncScrolling: "single",
            saveHTMLToTextarea: true,//是否以html格式存储
            imageUpload: true,//图片上传功能
            imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
            imageUploadURL: "/markdown/uploadImage.action",//发起存储后台请求
            path: "plugins/editormd/lib/",
            toolbarIcons: function () {
                return ["undo", "redo", "|", "bold", "italic", "quote", 
                "uppercase", "lowercase", "|", "h1", "h2", "h3", "h4", "|", 
                "link", "image", "code", "code-block", "|", "watch", "preview", 
                "fullscreen", "clear"]
            }
        });
    });
	resultMap.put("success", 1);//返回是否成功
resultMap.put("message", "上传成功");//返回结果消息
resultMap.put("url", rootUrl);//前端用于显示上传成功的图片URL