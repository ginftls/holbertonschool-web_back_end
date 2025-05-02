#!/usr/bin/env python3
"""
Module that contains a function to list all documents in a MongoDB collection
"""


def list_all(mongo_collection):
    """
    Lists all documents in a MongoDB collection

    Args:
        mongo_collection: The pymongo collection object

    Returns:
        A list of all documents in the collection or an empty list if none
    """
    if mongo_collection is None:
        return []

    # Find all documents in the collection and convert cursor to list
    documents = list(mongo_collection.find())
    return documents
