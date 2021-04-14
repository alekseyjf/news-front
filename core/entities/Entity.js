import _ from "lodash";

class Entity {
    constructor(entity) {
        this.entity = _.cloneDeep(entity || {});
    }

    /**
     * @method
     * @returns {string|number}
     */
    getId() {
        return this.entity.id || "";
    }
}

export default Entity;
