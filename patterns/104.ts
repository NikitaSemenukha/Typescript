// Builder

enum ImageFormat {
    Png = 'png',
    Jpeg = 'jpeg'
}

interface IResolution {
    width: number;
    heigth: number;
}

interface IImageConversion extends IResolution {
    format: ImageFormat;
}

class ImageBuider {
    private formats: ImageFormat[] = [];
    private resolutions: IResolution[] = [];

    addPng() {
        if (this.formats.includes(ImageFormat.Png)) {
            return this;
        }
        this.formats.push(ImageFormat.Png);
        return this;
    }

    addJpeg() {
        if (this.formats.includes(ImageFormat.Png)) {
            return this;
        }
        this.formats.push(ImageFormat.Jpeg);
        return this;
    }

    addResolution(width: number, heigth: number) {
        this.resolutions.push({ width, heigth });
        return this;
    }

    build(): IImageConversion[] {
        const res: IImageConversion[] = [];
        for (const r of this.resolutions) {
            for (const f of this.formats) {
                res.push({
                    format: f,
                    width: r.width,
                    heigth: r.heigth
                })
            }
        }
        return res;
    }
}

console.log(new ImageBuider()
    .addJpeg()
    .addPng()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build()
)