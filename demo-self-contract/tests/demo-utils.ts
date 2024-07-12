import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { NumDec, NumInc } from "../generated/demo/demo"

export function createNumDecEvent(param0: Address, param1: BigInt): NumDec {
  let numDecEvent = changetype<NumDec>(newMockEvent())

  numDecEvent.parameters = new Array()

  numDecEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )
  numDecEvent.parameters.push(
    new ethereum.EventParam("param1", ethereum.Value.fromUnsignedBigInt(param1))
  )

  return numDecEvent
}

export function createNumIncEvent(param0: Address, param1: BigInt): NumInc {
  let numIncEvent = changetype<NumInc>(newMockEvent())

  numIncEvent.parameters = new Array()

  numIncEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )
  numIncEvent.parameters.push(
    new ethereum.EventParam("param1", ethereum.Value.fromUnsignedBigInt(param1))
  )

  return numIncEvent
}
