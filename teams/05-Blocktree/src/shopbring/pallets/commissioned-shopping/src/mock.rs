/*
 * Copyright (C) 2017-2021 blocktree.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//! Mocks for the module.

#![cfg(test)]

use super::*;
use crate::{Module, Trait};
use frame_support::{impl_outer_event, impl_outer_origin, parameter_types, weights::Weight};
use frame_system as system;
use primitives;
use sp_core::H256;
use sp_runtime::{
    testing::Header,
    traits::{BlakeTwo256, IdentityLookup},
    Perbill,
};
use system::EnsureRoot;

mod commissioned_shopping {
    pub use crate::Event;
}

impl_outer_origin! {
    pub enum Origin for Test {}
}

impl_outer_event! {
    pub enum TestEvent for Test {
        system<T>,
        commissioned_shopping<T>,
        pallet_generic_asset<T>,
    }
}

// Configure a mock runtime to test the pallet.

// test accounts
pub const ALICE: u64 = 1;
pub const BOB: u64 = 2;
pub const CHARLIE: u64 = 3;

/// NATIVE_ASSET_ID
pub const NATIVE_ASSET_ID: primitives::AssetId = 1;

#[derive(Clone, Eq, PartialEq)]
pub struct Test;
parameter_types! {
    pub const BlockHashCount: u64 = 250;
    pub const MaximumBlockWeight: Weight = 1024;
    pub const MaximumBlockLength: u32 = 2 * 1024;
    pub const AvailableBlockRatio: Perbill = Perbill::from_percent(75);
}

impl system::Trait for Test {
    type BaseCallFilter = ();
    type Origin = Origin;
    type Call = ();
    type Index = u64;
    type BlockNumber = u64;
    type Hash = H256;
    type Hashing = BlakeTwo256;
    type AccountId = u64;
    type Lookup = IdentityLookup<Self::AccountId>;
    type Header = Header;
    type Event = TestEvent;
    type BlockHashCount = BlockHashCount;
    type MaximumBlockWeight = MaximumBlockWeight;
    type DbWeight = ();
    type BlockExecutionWeight = ();
    type ExtrinsicBaseWeight = ();
    type MaximumExtrinsicWeight = MaximumBlockWeight;
    type MaximumBlockLength = MaximumBlockLength;
    type AvailableBlockRatio = AvailableBlockRatio;
    type Version = ();
    type PalletInfo = ();
    type AccountData = ();
    type OnNewAccount = ();
    type OnKilledAccount = ();
    type SystemWeightInfo = ();
}

impl pallet_generic_asset::Trait for Test {
    type AssetId = u32;
    type Balance = u128;
    type Event = TestEvent;
    type WeightInfo = ();
}

parameter_types! {
    pub const ShoppingTimeLimit: primitives::BlockNumber = 10;
    pub const ReceivingTimeLimit: primitives::BlockNumber = 10;
    pub const ResponseReturnTimeLimit: primitives::BlockNumber = 10;
    pub const AcceptReturnTimeLimit: primitives::BlockNumber = 10;
    pub const ClearTimeLimit: primitives::BlockNumber = 10;
}

impl Trait for Test {
    type Event = TestEvent;
    type AssetId = primitives::AssetId;
    type Currency = pallet_generic_asset::Module<Self>;
    type ShoppingTimeLimit = ShoppingTimeLimit;
    type ReceivingTimeLimit = ReceivingTimeLimit;
    type ResponseReturnTimeLimit = ResponseReturnTimeLimit;
    type AcceptReturnTimeLimit = AcceptReturnTimeLimit;
    type ClearTimeLimit = ClearTimeLimit;
    type OnTransactionPayment = ();
    type ApproveOrigin = EnsureRoot<Self::AccountId>;
}

pub type System = system::Module<Test>;
pub type CommissionedShopping = Module<Test>;
pub type GenericAsset = pallet_generic_asset::Module<Test>;

pub struct ExtBuilder {
    tip_income_ratio: (u8, u8),
}

impl Default for ExtBuilder {
    fn default() -> Self {
        Self {
            tip_income_ratio: (1, 1),
        }
    }
}

impl ExtBuilder {
    pub fn build(self) -> sp_io::TestExternalities {
        let mut t = frame_system::GenesisConfig::default()
            .build_storage::<Test>()
            .unwrap();
        pallet_generic_asset::GenesisConfig::<Test> {
            assets: vec![NATIVE_ASSET_ID],
            initial_balance: 100000,
            endowed_accounts: vec![ALICE, BOB],
            next_asset_id: 100,
            staking_asset_id: 0,
            spending_asset_id: NATIVE_ASSET_ID,
            permissions: vec![],
            asset_meta: vec![(
                NATIVE_ASSET_ID,
                pallet_generic_asset::AssetInfo::new(b"SBG".to_vec(), 8),
            )],
        }
        .assimilate_storage(&mut t)
        .unwrap();
        let mut ext = sp_io::TestExternalities::new(t);

        // Run in the context of the first block
        ext.execute_with(|| frame_system::Module::<Test>::set_block_number(1));
        ext
    }
}
