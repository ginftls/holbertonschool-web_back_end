#!/usr/bin/env python3
"""
Module that contains a function to update the topics of a school document
"""


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name

    Args:
        mongo_collection: The pymongo collection object
        name (str): The school name to update
        topics (list of str): The list of topics approached in the school

    Returns:
        None
    """
    # Define the filter to match school documents by name
    query = {"name": name}

    # Define the update operation to set the topics field
    update = {"$set": {"topics": topics}}

    # Update the document(s) that match the filter
    mongo_collection.update_many(query, update)
