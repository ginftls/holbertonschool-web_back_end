#!/usr/bin/env python3
"""
Module that contains a function to find schools by topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic

    Args:
        mongo_collection: The pymongo collection object
        topic (str): The topic searched

    Returns:
        List of schools that have the specified topic
    """
    # Create a query to find documents where the topics
    # array contains the specified topic
    query = {"topics": topic}

    # Find all documents that match the query and return as a list
    schools = list(mongo_collection.find(query))
    return schools
