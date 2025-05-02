#!/usr/bin/env python3
"""
Module that contains a function to insert a new document
in a MongoDB collection
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a MongoDB collection based on kwargs

    Args:
        mongo_collection: The pymongo collection object
        **kwargs: Key/value pairs representing the document to insert

    Returns:
        The new _id of the inserted document
    """
    # Insert a new document with the kwargs as field values
    result = mongo_collection.insert_one(kwargs)

    # Return the _id of the newly inserted document
    return result.inserted_id
