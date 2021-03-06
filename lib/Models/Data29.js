/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Data29
 */
class Data29 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.period_start = this.constructor.getValue(obj.period_start);
        this.period_end = this.constructor.getValue(obj.period_end);
        this.deals = this.constructor.getValue(obj.deals);
        this.totals = this.constructor.getValue(obj.totals);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'period_start', realName: 'period_start' },
            { name: 'period_end', realName: 'period_end' },
            { name: 'deals', realName: 'deals', array: true, type: 'Deal1' },
            { name: 'totals', realName: 'totals', type: 'Totals' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = Data29;
