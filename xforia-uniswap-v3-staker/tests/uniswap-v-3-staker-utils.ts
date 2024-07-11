import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  DepositTransferred,
  IncentiveCreated,
  IncentiveEnded,
  RewardClaimed,
  TokenStaked,
  TokenUnstaked
} from "../generated/UniswapV3Staker/UniswapV3Staker"

export function createDepositTransferredEvent(
  tokenId: BigInt,
  oldOwner: Address,
  newOwner: Address
): DepositTransferred {
  let depositTransferredEvent = changetype<DepositTransferred>(newMockEvent())

  depositTransferredEvent.parameters = new Array()

  depositTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  depositTransferredEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  depositTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return depositTransferredEvent
}

export function createIncentiveCreatedEvent(
  rewardToken: Address,
  pool: Address,
  startTime: BigInt,
  endTime: BigInt,
  refundee: Address,
  reward: BigInt
): IncentiveCreated {
  let incentiveCreatedEvent = changetype<IncentiveCreated>(newMockEvent())

  incentiveCreatedEvent.parameters = new Array()

  incentiveCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )
  incentiveCreatedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )
  incentiveCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  incentiveCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  incentiveCreatedEvent.parameters.push(
    new ethereum.EventParam("refundee", ethereum.Value.fromAddress(refundee))
  )
  incentiveCreatedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return incentiveCreatedEvent
}

export function createIncentiveEndedEvent(
  incentiveId: Bytes,
  refund: BigInt
): IncentiveEnded {
  let incentiveEndedEvent = changetype<IncentiveEnded>(newMockEvent())

  incentiveEndedEvent.parameters = new Array()

  incentiveEndedEvent.parameters.push(
    new ethereum.EventParam(
      "incentiveId",
      ethereum.Value.fromFixedBytes(incentiveId)
    )
  )
  incentiveEndedEvent.parameters.push(
    new ethereum.EventParam("refund", ethereum.Value.fromUnsignedBigInt(refund))
  )

  return incentiveEndedEvent
}

export function createRewardClaimedEvent(
  to: Address,
  reward: BigInt
): RewardClaimed {
  let rewardClaimedEvent = changetype<RewardClaimed>(newMockEvent())

  rewardClaimedEvent.parameters = new Array()

  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return rewardClaimedEvent
}

export function createTokenStakedEvent(
  tokenId: BigInt,
  incentiveId: Bytes,
  liquidity: BigInt
): TokenStaked {
  let tokenStakedEvent = changetype<TokenStaked>(newMockEvent())

  tokenStakedEvent.parameters = new Array()

  tokenStakedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  tokenStakedEvent.parameters.push(
    new ethereum.EventParam(
      "incentiveId",
      ethereum.Value.fromFixedBytes(incentiveId)
    )
  )
  tokenStakedEvent.parameters.push(
    new ethereum.EventParam(
      "liquidity",
      ethereum.Value.fromUnsignedBigInt(liquidity)
    )
  )

  return tokenStakedEvent
}

export function createTokenUnstakedEvent(
  tokenId: BigInt,
  incentiveId: Bytes
): TokenUnstaked {
  let tokenUnstakedEvent = changetype<TokenUnstaked>(newMockEvent())

  tokenUnstakedEvent.parameters = new Array()

  tokenUnstakedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  tokenUnstakedEvent.parameters.push(
    new ethereum.EventParam(
      "incentiveId",
      ethereum.Value.fromFixedBytes(incentiveId)
    )
  )

  return tokenUnstakedEvent
}
