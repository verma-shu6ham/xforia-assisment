import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { NumDec } from "../generated/schema"
import { NumDec as NumDecEvent } from "../generated/demo/demo"
import { handleNumDec } from "../src/demo"
import { createNumDecEvent } from "./demo-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let param0 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let param1 = BigInt.fromI32(234)
    let newNumDecEvent = createNumDecEvent(param0, param1)
    handleNumDec(newNumDecEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NumDec created and stored", () => {
    assert.entityCount("NumDec", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NumDec",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "param0",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NumDec",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "param1",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
