# solmate
## Steps for using sol-stream-voting API to get logs from solana program:

Open 4 terminals

Terminal #1: Start solana local testnet.
```
solana config set --url localhost
solana-test-validator --no-bpf-jit --reset
```

To see logs from the localhost testnet for when functions from contract are triggered or when contract is deployed:
Terminal #2:
```
solana logs
```

Terminal #3:
```
anchor build
anchor deploy
```
Take note of programId displayed:
![alt text](https://github.com/maars202/solana-voting/blob/main/solana-voting-programs/imgs/deployedProgramId.png)

Place programId in solana-voting-programs/programs/solana-voting/src/lib.rs in line 7:
```
declare_id!("3NoSeAgxLJk3WAaFhZkiXXoYmiHPSLVLoaLRSxUoDj4b") 
```

Place programId in solana-voting-programs/Anchor.toml in line 2: 
```
solana_voting = "3NoSeAgxLJk3WAaFhZkiXXoYmiHPSLVLoaLRSxUoDj4b"
```

Place programId in sol-stream-voting/src/solana.rs in line 16 and 81: 
```
let programID = "3NoSeAgxLJk3WAaFhZkiXXoYmiHPSLVLoaLRSxUoDj4b";
```

Go back to Terminal #3:
```
anchor run test2
```

![alt text](https://github.com/maars202/solana-voting/blob/main/solana-voting-programs/imgs/anchorTestResult.png)

After the test have been run, it will generate logs related to the program you have deployed on the solana local testnet in terminal #4 and terminal #2.

