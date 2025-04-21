#!/usr/bin/env python3
"""Module for summing a list of integers and floats with type annotations."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of a list containing integers and floats as a float."""
    return sum(mxd_lst)
