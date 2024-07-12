import {
  NumDec as NumDecEvent,
  NumInc as NumIncEvent
} from "../generated/demo/demo"
import { NumDec, NumInc } from "../generated/schema"

export function handleNumDec(event: NumDecEvent): void {
  let entity = new NumDec(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.param0 = event.params.param0
  entity.param1 = event.params.param1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNumInc(event: NumIncEvent): void {
  let entity = new NumInc(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.param0 = event.params.param0
  entity.param1 = event.params.param1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
