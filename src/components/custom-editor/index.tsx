"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import EditorJS from "@editorjs/editorjs"
import { useForm } from "react-hook-form"

import "@/styles/editor.css"
import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"



export function CustomEditor() {
  const { register, handleSubmit } = useForm<FormData>({
  })
  const ref = React.useRef<EditorJS>()
  const router = useRouter()
  const [isSaving, setIsSaving] = React.useState<boolean>(false)
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const initializeEditor = React.useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default
    const Header = (await import("@editorjs/header")).default
    const CheckList = (await import("@editorjs/checklist")).default
    const CodeBox = (await import("@bomdi/codebox")).default
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

    const body ={content:{
        "time": 1693036088893,
        "blocks": [
            {
                "id": "8uJM9M69JF",
                "type": "checkList",
                "data": {
                    "items": [
                        {
                            "text": "dfsdfsd",
                            "checked": true
                        }
                    ]
                }
            },
            {
                "id": "fkJhC0xP34",
                "type": "header",
                "data": {
                    "text": "dfsadfsdfsa",
                    "level": 2
                }
            },
            {
                "id": "KlvFCmURRX",
                "type": "code",
                "data": {
                    "code": "<h1>=============</h1>"
                }
            }
        ],
        "version": "2.28.0"
    }}

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor
        },
        placeholder: "Type here to write your post...",
        inlineToolbar: true,
        data: body.content,
        tools: {
          header: Header,
          checkList: CheckList,
          codeBox: CodeBox,
          delimiter: Delimiter,
          embed: Embed,
          image: {
            class: Image,
            config: {
                uploader: {
                    uploadByFile(file:any) {
                        debugger
                        let formData = new FormData();
                        formData.append("images", file);
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
        ref.current = undefined
      }
    }
  }, [isMounted, initializeEditor])

  async function onSubmit(data: FormData) {
    setIsSaving(true)

    const blocks = await ref.current?.save()
    debugger
    // const response = await fetch(`/api/posts/${post.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title: data.title,
    //     content: blocks,
    //   }),
    // })

    setIsSaving(false)

    // if (!response?.ok) {
    //   return toast({
    //     title: "Something went wrong.",
    //     description: "Your post was not saved. Please try again.",
    //     variant: "destructive",
    //   })
    // }

    router.refresh()

    return toast({
      description: "Your post has been saved.",
      variant: "destructive"
    })
  }

  if (!isMounted) {
    return null
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="prose prose-stone mx-auto w-[800px] dark:prose-invert">
            <button type="submit" className={cn(buttonVariants())}>
              <span>Save</span>
            </button>
            <div id="editor" className="min-h-[500px]" />
          </div>
        </div>
      </div>
    </form>
  )
}
