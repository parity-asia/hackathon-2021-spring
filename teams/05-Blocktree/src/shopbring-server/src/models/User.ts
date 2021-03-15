/*
 * Copyright (C) 2017-2021 blocktree.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Model } from 'objection';

import connection from './connection';

Model.knex(connection);

export default class User extends Model {
	id!: string
	email!: string
	mobile!: string
	username!: string
	pubkey!: string
	address!:string
	nickname!:string
	ctime!:number
	utime!:number
	// 0.未认证 1.已认证
	validEmail!:number
	validMobile!:number
	state!:number

	static get tableName (): string {
		return 'sbg_user';
	}
}

