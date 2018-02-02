declare module QRCode {
    export class QRCode {
		constructor(el: HTMLElement | string, optionsOrText: QRCodeConfig | string);

	    static CorrectLevel: CorrectLevel;

		clear(): void;
		makeCode(text: string, title?: string): void;
		makeImage(): void;
	    hasImageSupport(callback: function): boolean;

    	write(path): void;
	}

    export enum CorrectLevel {
        M, L, H, Q
    }

    interface QRCodeConfig {
        text?: string,
        title?: string | null | false,
		width?: number,
		height?: number,
		colorDark?: string,
		colorLight?: string,
        colorBorder?: string,
		correctLevel?: CorrectLevel,
        typeNumber?: number,
        blockratio?: number,
        border?: number,
        margin?: number,
        class?: string,
        useSVG?: boolean,
        useTABLE?: boolean,
        drawOnlyDark?: boolean,
        noSmoothing?: boolean,
        removeAntiAliasing?: boolean,
        targetImage?: HTMLElement | null,
        cover?: null,
        success?: null | function,      // function (DOM_image_element OR false)
        error?: null | function,        // function ()
	}
}

