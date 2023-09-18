export const DuelS5DiamondABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "facetAddress",
            "type": "address"
          },
          {
            "internalType": "enum IDiamondCut.FacetCutAction",
            "name": "action",
            "type": "uint8"
          },
          {
            "internalType": "bytes4[]",
            "name": "functionSelectors",
            "type": "bytes4[]"
          }
        ],
        "indexed": false,
        "internalType": "struct IDiamondCut.FacetCut[]",
        "name": "_diamondCut",
        "type": "tuple[]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_init",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_calldata",
        "type": "bytes"
      }
    ],
    "name": "DiamondCut",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "facetAddress",
            "type": "address"
          },
          {
            "internalType": "enum IDiamondCut.FacetCutAction",
            "name": "action",
            "type": "uint8"
          },
          {
            "internalType": "bytes4[]",
            "name": "functionSelectors",
            "type": "bytes4[]"
          }
        ],
        "internalType": "struct IDiamondCut.FacetCut[]",
        "name": "_diamondCut",
        "type": "tuple[]"
      },
      {
        "internalType": "address",
        "name": "_init",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_calldata",
        "type": "bytes"
      }
    ],
    "name": "diamondCut",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "_functionSelector",
        "type": "bytes4"
      }
    ],
    "name": "facetAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "facetAddress_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "facetAddresses",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "facetAddresses_",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_facet",
        "type": "address"
      }
    ],
    "name": "facetFunctionSelectors",
    "outputs": [
      {
        "internalType": "bytes4[]",
        "name": "facetFunctionSelectors_",
        "type": "bytes4[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "facets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "facetAddress",
            "type": "address"
          },
          {
            "internalType": "bytes4[]",
            "name": "functionSelectors",
            "type": "bytes4[]"
          }
        ],
        "internalType": "struct IDiamondLoupe.Facet[]",
        "name": "facets_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "_interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UintUtils__InsufficientHexLength",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_entryId",
        "type": "uint256"
      }
    ],
    "name": "adminInsertDuelEntry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "cancelDuelEntry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_addresses",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint64[]",
        "name": "_scores",
        "type": "uint64[]"
      }
    ],
    "name": "increaseScore",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint64[]",
        "name": "_scores",
        "type": "uint64[]"
      },
      {
        "internalType": "address[]",
        "name": "_addresses",
        "type": "address[]"
      }
    ],
    "name": "insertLeaderboard",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "removeActiveDuel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_heroId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      },
      {
        "internalType": "uint64",
        "name": "_timestamp",
        "type": "uint64"
      }
    ],
    "name": "setCrossChainHeroLock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_blocks",
        "type": "uint16"
      }
    ],
    "name": "setDuelCompleteBlocks",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setGoldPot",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_minScore",
        "type": "uint64"
      },
      {
        "internalType": "uint32",
        "name": "_minStreak",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "_formerKingRechallengeCooldown",
        "type": "uint256"
      }
    ],
    "name": "setKingChallengeRequirements",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_lose",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "_win",
        "type": "uint64"
      }
    ],
    "name": "setLoseWinThresholds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_limit",
        "type": "uint256"
      }
    ],
    "name": "setMatchLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_threshold",
        "type": "uint256"
      }
    ],
    "name": "setMatchThreshold",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_open",
        "type": "bool"
      }
    ],
    "name": "setOpenMatchmaking",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_timeout",
        "type": "uint256"
      }
    ],
    "name": "setPassiveDuelEntryTimeout",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_cost",
        "type": "uint256"
      }
    ],
    "name": "setRechargeCost",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "_score",
        "type": "uint64"
      }
    ],
    "name": "setScore",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_end",
        "type": "uint256"
      }
    ],
    "name": "setSeasonStartAndEnd",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_statScienceAddress",
        "type": "address"
      }
    ],
    "name": "setStatScienceAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint32",
        "name": "_streak",
        "type": "uint32"
      }
    ],
    "name": "setStreak",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_threshold",
        "type": "uint256"
      }
    ],
    "name": "setTimeoutThreshold",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenUnlockerAddress",
        "type": "address"
      }
    ],
    "name": "setTokenUnlocker",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_allowed",
        "type": "bool"
      }
    ],
    "name": "setTypeAllowed",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_player",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "_score",
        "type": "uint64"
      }
    ],
    "name": "updatePlayerScore",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_duelId",
        "type": "uint256"
      }
    ],
    "name": "doBattles",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCurrentClassBonuses",
    "outputs": [
      {
        "internalType": "uint8[6][2]",
        "name": "",
        "type": "uint8[6][2]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_duelId",
        "type": "uint256"
      }
    ],
    "name": "completeDuel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_numToComplete",
        "type": "uint256"
      }
    ],
    "name": "completeDuels",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_key",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "getKeyExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_type",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "getLeaderboardNode",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_parent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_left",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_right",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_red",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "_keyCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_count",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_type",
        "type": "uint8"
      }
    ],
    "name": "getLeaderboardRoot",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_root",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "_heroIds",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256",
        "name": "_tokenFee",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "_background",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_stat",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_entries",
        "type": "uint8"
      }
    ],
    "name": "enterDuelLobby",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "_heroIds",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256",
        "name": "_tokenFee",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "_background",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_stat",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_entries",
        "type": "uint8"
      }
    ],
    "name": "enterDuelLobbyWithLocked",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "duelId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "player1",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "player2",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player1",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "player2",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "player1DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "player2DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "winner",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "player1Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "player2Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "duelId",
                "type": "uint256"
              },
              {
                "internalType": "uint16",
                "name": "base",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "streakBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint16",
                "name": "miscBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "diffBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint64",
                "name": "scoreBefore",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "scoreAfter",
                "type": "uint64"
              }
            ],
            "internalType": "struct PlayerScoreChange",
            "name": "player1ScoreChange",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct Duel",
        "name": "duel",
        "type": "tuple"
      }
    ],
    "name": "DuelCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "duelId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "player1",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "player2",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player1",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "player2",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "player1DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "player2DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "winner",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "player1Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "player2Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "duelId",
                "type": "uint256"
              },
              {
                "internalType": "uint16",
                "name": "base",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "streakBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint16",
                "name": "miscBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "diffBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint64",
                "name": "scoreBefore",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "scoreAfter",
                "type": "uint64"
              }
            ],
            "internalType": "struct PlayerScoreChange",
            "name": "player1ScoreChange",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct Duel",
        "name": "duel",
        "type": "tuple"
      }
    ],
    "name": "DuelCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "heroIds",
        "type": "uint256[]"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct DuelEntry",
        "name": "duelEntry",
        "type": "tuple"
      }
    ],
    "name": "DuelEntryCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "duelId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "duelEntryId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "player1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "player2",
        "type": "address"
      }
    ],
    "name": "DuelEntryMatched",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "lobby",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "duelEntryId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "timestamp",
        "type": "uint64"
      }
    ],
    "name": "DuelKingBounty",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "lobby",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "duelEntryId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "timestamp",
        "type": "uint64"
      }
    ],
    "name": "DuelKingReward",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "duelEntryId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "duelType",
        "type": "uint256"
      }
    ],
    "name": "DuelMatchReshuffle",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "lobby",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newKingId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldKingId",
        "type": "uint256"
      }
    ],
    "name": "DuelNewKing",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "timestamp",
        "type": "uint64"
      }
    ],
    "name": "DuelPtBalanceClaimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "source",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "timestamp",
        "type": "uint64"
      }
    ],
    "name": "FeeDeferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "source",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "timestamp",
        "type": "uint64"
      }
    ],
    "name": "FeeDisbursed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "heroId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lastHeroDuelOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "lastHeroDuelTime",
        "type": "uint256"
      }
    ],
    "name": "HeroLockedToWallet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "duelEntryId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "duelType",
        "type": "uint256"
      }
    ],
    "name": "PassiveEntryRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "duelId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "uint16",
            "name": "base",
            "type": "uint16"
          },
          {
            "internalType": "uint32",
            "name": "streakBonus",
            "type": "uint32"
          },
          {
            "internalType": "uint16",
            "name": "miscBonus",
            "type": "uint16"
          },
          {
            "internalType": "uint32",
            "name": "diffBonus",
            "type": "uint32"
          },
          {
            "internalType": "uint64",
            "name": "scoreBefore",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "scoreAfter",
            "type": "uint64"
          }
        ],
        "indexed": false,
        "internalType": "struct PlayerScoreChange",
        "name": "playerScoreChange",
        "type": "tuple"
      }
    ],
    "name": "PlayerScoreChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "duelId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "player1HeroId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "player2HeroId",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint16",
            "name": "turn",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "player1HeroId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "player2HeroId",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "stat",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "background",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint8",
                "name": "roll",
                "type": "uint8"
              },
              {
                "internalType": "uint16",
                "name": "elementBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "statValue",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "backgroundBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "classBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "subclassBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "equipmentBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "total",
                "type": "uint16"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "equippedSlots",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "petId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "weapon1Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "weapon2Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "offhand1Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "offhand2Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "armorId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "accessoryId",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct HeroEquipment",
                "name": "equipment",
                "type": "tuple"
              }
            ],
            "internalType": "struct HeroTurnScore",
            "name": "hero1Score",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8",
                "name": "roll",
                "type": "uint8"
              },
              {
                "internalType": "uint16",
                "name": "elementBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "statValue",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "backgroundBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "classBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "subclassBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "equipmentBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "total",
                "type": "uint16"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "equippedSlots",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "petId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "weapon1Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "weapon2Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "offhand1Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "offhand2Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "armorId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "accessoryId",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct HeroEquipment",
                "name": "equipment",
                "type": "tuple"
              }
            ],
            "internalType": "struct HeroTurnScore",
            "name": "hero2Score",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "winnerHeroId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "winnerPlayer",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "petId",
                "type": "uint256"
              },
              {
                "internalType": "uint8",
                "name": "petRarity",
                "type": "uint8"
              }
            ],
            "internalType": "struct DuelEntryHeroSnapshot",
            "name": "hero1Snapshot",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "petId",
                "type": "uint256"
              },
              {
                "internalType": "uint8",
                "name": "petRarity",
                "type": "uint8"
              }
            ],
            "internalType": "struct DuelEntryHeroSnapshot",
            "name": "hero2Snapshot",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct TurnResult",
        "name": "turnResult",
        "type": "tuple"
      }
    ],
    "name": "TurnOutcome",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_heroId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_address",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "UpdatedCrossChainData",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "MODERATOR_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UPDATER_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "heroId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "lobby",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "day",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "rechargeCount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "EntriesRecharged",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "getActiveDuels",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player1",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "player2",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "player1DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "player2DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "winner",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "player1Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "player2Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "duelId",
                "type": "uint256"
              },
              {
                "internalType": "uint16",
                "name": "base",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "streakBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint16",
                "name": "miscBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "diffBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint64",
                "name": "scoreBefore",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "scoreAfter",
                "type": "uint64"
              }
            ],
            "internalType": "struct PlayerScoreChange",
            "name": "player1ScoreChange",
            "type": "tuple"
          }
        ],
        "internalType": "struct Duel[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_profile",
        "type": "address"
      }
    ],
    "name": "getChallenges",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player1",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "player2",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "player1DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "player2DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "winner",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "player1Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "player2Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "duelId",
                "type": "uint256"
              },
              {
                "internalType": "uint16",
                "name": "base",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "streakBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint16",
                "name": "miscBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "diffBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint64",
                "name": "scoreBefore",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "scoreAfter",
                "type": "uint64"
              }
            ],
            "internalType": "struct PlayerScoreChange",
            "name": "player1ScoreChange",
            "type": "tuple"
          }
        ],
        "internalType": "struct Duel[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_heroId",
        "type": "uint256"
      }
    ],
    "name": "getCurrentHeroScoreDuelId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getDuel",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player1",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "player2",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "player1DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "player2DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "winner",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "player1Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "player2Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "duelId",
                "type": "uint256"
              },
              {
                "internalType": "uint16",
                "name": "base",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "streakBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint16",
                "name": "miscBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "diffBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint64",
                "name": "scoreBefore",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "scoreAfter",
                "type": "uint64"
              }
            ],
            "internalType": "struct PlayerScoreChange",
            "name": "player1ScoreChange",
            "type": "tuple"
          }
        ],
        "internalType": "struct Duel",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_end",
        "type": "uint256"
      }
    ],
    "name": "getDuelEntries",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getDuelEntry",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_profile",
        "type": "address"
      }
    ],
    "name": "getDuelHistory",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player1",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "player2",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "player1DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "player2DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "winner",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "player1Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "player2Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "duelId",
                "type": "uint256"
              },
              {
                "internalType": "uint16",
                "name": "base",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "streakBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint16",
                "name": "miscBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "diffBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint64",
                "name": "scoreBefore",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "scoreAfter",
                "type": "uint64"
              }
            ],
            "internalType": "struct PlayerScoreChange",
            "name": "player1ScoreChange",
            "type": "tuple"
          }
        ],
        "internalType": "struct Duel[100]",
        "name": "",
        "type": "tuple[100]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_duelId",
        "type": "uint256"
      }
    ],
    "name": "getDuelIndexP1",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getDuelRewards",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "item",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          }
        ],
        "internalType": "struct DuelReward[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getDuelTurns",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint16",
            "name": "turn",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "player1HeroId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "player2HeroId",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "stat",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "background",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint8",
                "name": "roll",
                "type": "uint8"
              },
              {
                "internalType": "uint16",
                "name": "elementBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "statValue",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "backgroundBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "classBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "subclassBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "equipmentBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "total",
                "type": "uint16"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "equippedSlots",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "petId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "weapon1Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "weapon2Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "offhand1Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "offhand2Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "armorId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "accessoryId",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct HeroEquipment",
                "name": "equipment",
                "type": "tuple"
              }
            ],
            "internalType": "struct HeroTurnScore",
            "name": "hero1Score",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8",
                "name": "roll",
                "type": "uint8"
              },
              {
                "internalType": "uint16",
                "name": "elementBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "statValue",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "backgroundBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "classBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "subclassBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "equipmentBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "total",
                "type": "uint16"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "equippedSlots",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "petId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "weapon1Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "weapon2Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "offhand1Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "offhand2Id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "armorId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "accessoryId",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct HeroEquipment",
                "name": "equipment",
                "type": "tuple"
              }
            ],
            "internalType": "struct HeroTurnScore",
            "name": "hero2Score",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "winnerHeroId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "winnerPlayer",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "petId",
                "type": "uint256"
              },
              {
                "internalType": "uint8",
                "name": "petRarity",
                "type": "uint8"
              }
            ],
            "internalType": "struct DuelEntryHeroSnapshot",
            "name": "hero1Snapshot",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "petId",
                "type": "uint256"
              },
              {
                "internalType": "uint8",
                "name": "petRarity",
                "type": "uint8"
              }
            ],
            "internalType": "struct DuelEntryHeroSnapshot",
            "name": "hero2Snapshot",
            "type": "tuple"
          }
        ],
        "internalType": "struct TurnResult[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_end",
        "type": "uint256"
      }
    ],
    "name": "getDuels",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player1",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "player2",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "player1DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "player2DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "winner",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "player1Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "player2Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "duelId",
                "type": "uint256"
              },
              {
                "internalType": "uint16",
                "name": "base",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "streakBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint16",
                "name": "miscBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "diffBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint64",
                "name": "scoreBefore",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "scoreAfter",
                "type": "uint64"
              }
            ],
            "internalType": "struct PlayerScoreChange",
            "name": "player1ScoreChange",
            "type": "tuple"
          }
        ],
        "internalType": "struct Duel[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_heroIds",
        "type": "uint256[]"
      }
    ],
    "name": "getHeroAddress",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getHeroCoreAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_heroId",
        "type": "uint256"
      }
    ],
    "name": "getHeroDuel",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player1",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "player2",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "player1DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "player2DuelEntry",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "winner",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "player1Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "player2Heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "duelId",
                "type": "uint256"
              },
              {
                "internalType": "uint16",
                "name": "base",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "streakBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint16",
                "name": "miscBonus",
                "type": "uint16"
              },
              {
                "internalType": "uint32",
                "name": "diffBonus",
                "type": "uint32"
              },
              {
                "internalType": "uint64",
                "name": "scoreBefore",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "scoreAfter",
                "type": "uint64"
              }
            ],
            "internalType": "struct PlayerScoreChange",
            "name": "player1ScoreChange",
            "type": "tuple"
          }
        ],
        "internalType": "struct Duel",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_heroIds",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256",
        "name": "_duelType",
        "type": "uint256"
      }
    ],
    "name": "getHeroDuelCountForDay",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_heroId",
        "type": "uint256"
      }
    ],
    "name": "getHeroDuelEntry",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_heroId",
        "type": "uint256"
      }
    ],
    "name": "getHeroLastTimePlayed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_heroId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      }
    ],
    "name": "getHeroRechargeInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_rechargeCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_rechargeCost",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_day",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "_secondsUntilNextDay",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_heroIds",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256",
        "name": "_duelType",
        "type": "uint256"
      }
    ],
    "name": "getHeroesDuelDailyData",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "numDuels",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rechargeCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rechargeCost",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "formerKingRechallengeTime",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "lastPlayer",
            "type": "address"
          }
        ],
        "internalType": "struct DuelDailyHeroData[]",
        "name": "heroData",
        "type": "tuple[]"
      },
      {
        "internalType": "uint256",
        "name": "_today",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "_secondsUntilNextDay",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getHighestScore",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      }
    ],
    "name": "getKingInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_kingId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_currentBounty",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_challengeCost",
        "type": "uint256"
      },
      {
        "internalType": "uint32",
        "name": "_streakRequired",
        "type": "uint32"
      },
      {
        "internalType": "uint64",
        "name": "_scoreRequired",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_end",
        "type": "uint256"
      }
    ],
    "name": "getLeaderboard",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "_addresses",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_scores",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_totalDuels",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_totalWins",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_score",
        "type": "uint64"
      },
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getLeaderboardRank",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getNumRanks",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_profile",
        "type": "address"
      }
    ],
    "name": "getPlayerDuelEntries",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_profile",
        "type": "address"
      }
    ],
    "name": "getPlayerInfo",
    "outputs": [
      {
        "internalType": "uint64[]",
        "name": "_scores",
        "type": "uint64[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_ranks",
        "type": "uint256[]"
      },
      {
        "internalType": "uint64[]",
        "name": "_totalWins",
        "type": "uint64[]"
      },
      {
        "internalType": "uint32[]",
        "name": "_winStreaks",
        "type": "uint32[]"
      },
      {
        "internalType": "uint64[]",
        "name": "_totalDuels",
        "type": "uint64[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_lbRanks",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256",
        "name": "_ptBalance",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_profile",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getPlayerRank",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_profile",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getPlayerScore",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "_rank",
        "type": "uint8"
      }
    ],
    "name": "getPracticeEntry",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getRankLevels",
    "outputs": [
      {
        "internalType": "uint16[]",
        "name": "",
        "type": "uint16[]"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getSeasonInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "season",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalDuelEntries",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getTotalDuelEntriesByType",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalDuels",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getTotalDuelsByType",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      }
    ],
    "name": "getTotalOpenDuelEntries",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_profile",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getTotalPlayerDuels",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_profile",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getTotalPlayerWins",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_player",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getWinStreaks",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "_heroIds",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256",
        "name": "_background",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_stat",
        "type": "uint256"
      }
    ],
    "name": "challengeKing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimPtBalance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_randomDistance",
        "type": "uint256"
      }
    ],
    "name": "getDuelEntryMatch",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_matchEntryId",
        "type": "uint256"
      }
    ],
    "name": "manualMatchAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_duelEntry1ID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_duelEntry2ID",
        "type": "uint256"
      }
    ],
    "name": "matchDuelEntry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "matchMake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      }
    ],
    "name": "matchMakeLobby",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      }
    ],
    "name": "matchMakeLobbyOne",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_player",
        "type": "address"
      }
    ],
    "name": "matchMakePlayer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_entryId",
        "type": "uint256"
      }
    ],
    "name": "repairDuelEntry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_entryId",
        "type": "uint256"
      }
    ],
    "name": "duelEntryPowerKeyExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_entryId",
        "type": "uint256"
      }
    ],
    "name": "duelEntryScoreKeyExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      }
    ],
    "name": "getFirstOpenEntry",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "getMMPowerNode",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_parent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_left",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_right",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_red",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "_keyCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_count",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_key",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_type",
        "type": "uint8"
      }
    ],
    "name": "getMMPowerRoot",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_root",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "getMMScoreNode",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_parent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_left",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_right",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_red",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "_keyCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_count",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_key",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_type",
        "type": "uint8"
      }
    ],
    "name": "getMMScoreRoot",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_root",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getNextDuelEntryMatchByPower",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getNextDuelEntryMatchByScore",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_key",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "getPowerTreeValueIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getPrevDuelEntryMatchByPower",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getPrevDuelEntryMatchByScore",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_key",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "getScoreTreeValueIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_key",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "getTreePrev",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "heroes",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "heroPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duelId",
            "type": "uint256"
          },
          {
            "internalType": "enum DuelType",
            "name": "duelType",
            "type": "uint8"
          },
          {
            "internalType": "enum DuelStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "winStreak",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "loseStreak",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "useLockedTokens",
            "type": "bool"
          },
          {
            "internalType": "uint8",
            "name": "numEntries",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "matched",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "boostedBackground",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "boostedStat",
                "type": "uint256"
              }
            ],
            "internalType": "struct DuelEntryMetadata",
            "name": "metadata",
            "type": "tuple"
          }
        ],
        "internalType": "struct DuelEntry",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getTreeValue",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_key",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_duelId",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "_heroIds",
        "type": "uint256[]"
      },
      {
        "internalType": "uint8",
        "name": "_background",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_stat",
        "type": "uint8"
      }
    ],
    "name": "acceptChallenge",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_duelId",
        "type": "uint256"
      }
    ],
    "name": "cancelPrivateDuel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "_heroIds",
        "type": "uint256[]"
      },
      {
        "internalType": "uint8",
        "name": "_rank",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_background",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_stat",
        "type": "uint8"
      }
    ],
    "name": "startPracticeDuel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lobby",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "_heroIds",
        "type": "uint256[]"
      },
      {
        "internalType": "address",
        "name": "_opponent",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "_background",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_stat",
        "type": "uint8"
      }
    ],
    "name": "startPrivateDuel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_lobby",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "_heroId",
        "type": "uint256"
      }
    ],
    "name": "rechargeEntries",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_lobby",
        "type": "uint8"
      },
      {
        "internalType": "uint256[]",
        "name": "_heroIds",
        "type": "uint256[]"
      }
    ],
    "name": "rechargeEntriesMulti",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },

  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_heroId",
        "type": "uint256"
      }
    ],
    "name": "getHeroDuelsPlayed",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }

] as const;