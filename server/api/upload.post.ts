import { type MultiPartData } from "h3";
import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";
import { randomUUID } from "crypto";

const storage = createStorage({
  driver: fsLiteDriver({ base: "./public/img_upload" }),
});

const saveFile = (file: MultiPartData) => {
  const [_mine, ext]=file.type!.split("/");
  const filename = `${randomUUID()}.${ext}`
  storage.setItemRaw(filename, file.data);
  return filename;
};

const config = useRuntimeConfig();
const url = config.public.baseUrl;

export default defineEventHandler(async (event) => {
  try {
    const body = (await readMultipartFormData(event)) as MultiPartData[];
    if(!body[0].type?.startsWith("image/")){
      throw createError({
        statusCode: 415,
        statusMessage: "上传图片格式不正确",
      });
    }
    const filename = saveFile(body[0])
    return {
      status: 200,
      msg: "图片上传成功",
      data:{
        url: `${url}/img_upload/${filename}`,
        markdown: `![](${url}/img_upload/${filename})`
      }
    };
  } catch (e) {
    throw createError({
      statusCode: 500,
      statusMessage: "服务器异常请稍后再试",
    });
  }
});
