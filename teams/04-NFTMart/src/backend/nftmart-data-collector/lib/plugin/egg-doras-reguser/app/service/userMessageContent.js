/*
 * @Author: doramart 
 * @Date: 2019-06-24 13:20:49 
 * @Last Modified by: doramart
 * @Last Modified time: 2020-10-03 00:47:01
 */

'use strict';
const Service = require('egg').Service;
const path = require('path')
const _ = require('lodash')

// general是一个公共库，可用可不用
const {
    _list,
    _item,
    _count,
    _create,
    _update,
    _removes,
    _safeDelete,
    _addToSet,
    _pull
} = require(path.join(process.cwd(), 'app/service/general'));


class UserMessageContentService extends Service {

    async find(payload = {}, {
        query = {},
        searchKeys = [],
        include = [],
        attributes = null
    } = {}) {

        let listdata = _list(this, this.ctx.model.UserMessageContent, payload, {
            query,
            searchKeys: !_.isEmpty(searchKeys) ? searchKeys : [],
            include: !_.isEmpty(include) ? include : [],
            attributes: attributes ? attributes : {
                exclude: ['password']
            },
        });
        return listdata;

    }

    async count(params = {}) {
        return _count(this, this.ctx.model.UserMessageContent, params);
    }

    async create(payload) {
        return _create(this, this.ctx.model.UserMessageContent, payload);
    }

    async removes(values, key = 'id') {
        return _removes(this, this.ctx.model.UserMessageContent, values, key);
    }

    async safeDelete(values) {
        return _safeDelete(this, this.ctx.model.UserMessageContent, values);
    }

    async update(id, payload) {
        return _update(this, this.ctx.model.UserMessageContent, id, payload);
    }

    async addToSet(res, id, payload) {
        return _addToSet(res, this.ctx.model.UserMessageContent, id, payload);
    }

    async pull(res, id, payload) {
        return _pull(res, this.ctx.model.UserMessageContent, id, payload);
    }

    async item({
        query = {},
        include = [],
        attributes = null
    } = {}) {
        return _item(this, this.ctx.model.UserMessageContent, {
            query,
            include: !_.isEmpty(include) ? include : [],
            attributes: attributes ? attributes : {},
        })
    }

}

module.exports = UserMessageContentService;