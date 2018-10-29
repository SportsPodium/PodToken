pragma solidity ^0.4.17;

import "./MintableToken.sol";
import "./PausableToken.sol";
import "./BurnableToken.sol";


contract PodCoin is MintableToken, PausableToken, BurnableToken {
  string public constant name = "Podium";
  string public constant symbol = "POD";
  uint8 public constant decimals = 18;
}
