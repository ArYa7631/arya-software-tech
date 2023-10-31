import React, { useCallback, useRef, useState } from "react"
import EditorJS from "@editorjs/editorjs"
import "@/styles/editor.css"
import { Button, } from "@/components/ui/button"

interface CustomEditorProps {
  onSubmit: (data: any) => any;
  readOnly: boolean;
  editorData: any;
}


export const CustomEditor = ({ onSubmit, readOnly,editorData }: CustomEditorProps) => {
  const ref = useRef<EditorJS | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default
    const Header = (await import("@editorjs/header")).default
    const CheckList = (await import("@editorjs/checklist")).default
    const Delimiter = (await import("@editorjs/delimiter")).default
    const Embed = (await import("@editorjs/embed")).default
    const Image = (await import("@editorjs/image")).default
    const Quote = (await import("@editorjs/quote")).default
    const SimpleImage = (await import("@editorjs/simple-image")).default
    const Table = (await import("@editorjs/table")).default
    const List = (await import("@editorjs/list")).default
    const Code = (await import("@editorjs/code")).default
    const LinkTool = (await import("@editorjs/link")).default
    const InlineCode = (await import("@editorjs/inline-code")).default

    const defaultEditorData = editorData ? editorData : {}
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor
        },
        placeholder: "Type here to write your post...",
        inlineToolbar: true,
        data: defaultEditorData,
        readOnly: readOnly,
        autofocus: true,
        tools: {
          header: Header,
          checkList: CheckList,
          delimiter: Delimiter,
          embed: Embed,
          image: {
            class: Image,
            inlineToolbar: true,
            config: {
              uploader: {
                uploadByFile(file: any) {
                  let formData = new FormData();
                  formData.append("images", file);

                  return {
                    success: 1,
                    file: {
                      url: "https://images.freeimages.com/images/large-previews/add/golden-gate-1471075.jpg"
                    }
                  }
                  // // send image to server
                  // return API.imageUpload(formData).then((res) => {
                  //     // get the uploaded image path, pushing image path to image array
                  //     imageArray.push(res.data.data)
                  //     return {
                  //         success: 1,
                  //         file: {
                  //             url: res.data.data
                  //         }
                  //     }
                  // })
                }
              }
            }
          },
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          quote: Quote,
          checklist: CheckList,
          simpleImage: SimpleImage
        },
      })
    }
  }, [])

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true)
    }
  }, [])

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor()

      return () => {
        ref.current?.destroy()
        ref.current = null
      }
    }
  }, [isMounted, initializeEditor])


  const handleSubmit = async () => {
    setIsSaving(true);
    const editor_response = await ref.current?.save();

    if (editor_response) {
      await onSubmit(editor_response);
    }
    setIsSaving(false);
  }
  if (!isMounted) {
    return null
  }

  return (
    <div className="grid w-full gap-10 mt-5">
      <div className="flex w-full items-center justify-between">
        <div className="prose prose-stone mx-auto w-full dark:prose-invert">
          {!readOnly && <Button onClick={handleSubmit} size={'lg'}>save</Button>}
          <div id="editor" className="min-h-[500px]" />
        </div>
      </div>
    </div>
  )
}
