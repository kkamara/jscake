import sizeOf from "image-size";

import { Form } from "../types/form_types";

class CakeValidation {
    protected imageTypes = ["jpg", "png"];

    /**
     * Validates create cake request.
     * @param Form form
     * @returns Array<string>
     */
    checkCreate(form: Form): Array<string> {
        const result = [];
        if (form.file === null) {
            result.push("Missing image field.");
        } else {
            const dimensions = sizeOf(form.file.path);
            if (!this.imageTypes.includes(dimensions.type)) {
                result.push(`Image type must be one of the following: ${this.imageTypes.join(', ')}.`);
            } else if (
                dimensions.height < 50
                || dimensions.height > 1000
                || dimensions.width < 50
                || dimensions.width > 1000
            ) {
                result.push("Image dimensions must be between 50x50 and 1000x1000.");
            }
        }
        return result;
    }
}

export default new CakeValidation();
