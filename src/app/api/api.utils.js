import fontManager from '../lib/FontManager';


// Get Host OS platform
export const getPlatform = (req, res) => {
    let platform = 'unknown';
    if (process.platform === 'darwin') {
        platform = 'darwin';
    } else if (process.platform === 'win32') {
        if (process.arch === 'x64') {
            platform = 'win64';
        } else if (process.arch === 'ia32') {
            platform = 'win32';
        }
    } else if (process.platform === 'linux' && process.arch === 'x64') {
        platform = 'linux';
    }

    res.send({ platform });
};

export const getFonts = (req, res) => {
    const fonts = fontManager.fonts
        .map((font) => {
            return {
                fontFamily: font.names.fontFamily.en,
                fontSubfamily: font.names.fontSubfamily.en,
                fullName: font.names.fullName.en
            };
        })
        .sort((a, b) => (a.fontFamily < b.fontFamily ? -1 : 1));

    res.send({
        fonts: fonts
    });
};