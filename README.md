# Image Editor

Add the TUI Image Editor to EditorJS Image module.

# Install

    npm install --save @ajite/editorjs-image-editor

# Usage

    import imageEditor  from '@ajite/editorjs-image-editor';

    var editors = new EditorJS({
        ...
        tools: {
            image: {
                class: ImageTool,
                config: {
                    ...
                    actions: [
                        imageEditor,
                    ]
                }
            },
        },
    });

# Build

    npm run build

# Build for Dev

    npm run build:dev
