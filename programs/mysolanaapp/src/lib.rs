use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
use anchor_lang::solana_program::system_program;
use borsh::{BorshDeserialize, BorshSerialize};
use std::iter::repeat;
use anchor_spl::token::{self, Mint, SetAuthority, TokenAccount, Transfer};

declare_id!("J69SAMv9PZSDHGk87CdAnN8AKAsJNLzCzkCh4z2xWp5T");

#[program]
mod mysolanaapp {
// mod mysolanaapp {
    use super::*;

    pub fn create(ctx: Context<Create>, evolution_level: String) -> ProgramResult {
        msg!("Create function!!! with args {:#?}", evolution_level);

        ctx.accounts.base_account.init_baseaccount(
            ctx.accounts.mintAddress.key(),
            ctx.accounts.seller.key(),
            ctx.accounts.seller_token.key(),
            evolution_level
        );
        Ok(())
    
    }


    pub fn increment(ctx: Context<Increment>) -> ProgramResult {
        msg!("Increment function!!!");
        let base_account = &mut ctx.accounts.base_account;
        base_account.count += 1;
        let evolution_num = base_account.evolution_level.parse::<u64>().unwrap();
        if (base_account.count % evolution_num) + 1 > base_account.tier {
            base_account.tier += 1;
        }
        Ok(())
    }
}


// Transaction instructions
#[derive(Accounts)]
pub struct Create<'info> {
    // #[account(init, payer = user, space = 16 + 16)]
    // pub base_account: Account<'info, BaseAccount>,

    #[account(
      mut,
      constraint = seller_token.amount == 1,
      constraint = seller_token.owner == seller.to_account_info().key()
  )]
    // #[account(mut)]
    pub seller_token: Account<'info, TokenAccount>,
    
    #[account(
        init,
        payer = seller,
        space = 8 + LISTING_PROOF_LEN, 
        seeds = [seller.key().as_ref(), mintAddress.key().as_ref(), b"points"],
        bump,
    )]
    pub base_account: Account<'info, BaseAccount>,
    #[account(mut)]
    pub seller: Signer<'info>,
    // pub mintAddress: Pubkey,
    pub mintAddress: Account<'info, Mint>,
    pub system_program: Program <'info, System>,
}

// Transaction instructions
#[derive(Accounts)]
pub struct Increment<'info> {
    #[account(mut)]
    pub base_account: Account<'info, BaseAccount>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program <'info, System>,
}


// // how its supposed to be:
// // Transaction instructions
// #[derive(Accounts)]
// pub struct Increment<'info> {
//     #[account(mut)]
//     pub base_account: Account<'info, BaseAccount>,
//     #[account(mut)]
//     pub owner: pubkey,
//     pub system_program: Program <'info, System>,
//     pub creator: Signer<'info>
// }



// // An account that goes inside a transaction instruction
// #[account]
// pub struct BaseAccount {
//     pub count: u64,

// }



pub const LISTING_PROOF_LEN: usize = 32 // NFT MINT
  + 32  // SELLER KEY
  + 32  // SELLER TOKEN ACCOUNT
  + 32  // ESCROW TOKEN ACCOUNT
  + 16  // LIST PRICE 
  + 1; // bump



// An account that goes inside a transaction instruction
#[account]
pub struct BaseAccount {
    // pub count: Vec<u64>,
    // pub points: Account<'info, Points>,


    // pub seller_key: Pubkey,     // Seller who listed, used to verify when cancelling and buying



    pub seller_token: Pubkey,   // Seller's token account, used to verify when cancelling

    pub mintAddress: Pubkey,
    pub seller_key: Pubkey,
    pub tier: u64,
    pub count: u64,
    pub evolution_level: String,
}

impl BaseAccount {
    pub fn init_baseaccount(
        &mut self,
        mintAddress: Pubkey,
        seller_key: Pubkey,
        seller_token: Pubkey,
        evolution_level: String
    ) {
        self.mintAddress = mintAddress;
        self.seller_key = seller_key;
        self.seller_token = seller_token;
        self.tier = 0;
        self.count = 0;
        self.evolution_level = evolution_level;
    }
}