import os
from pymongo import MongoClient
from dotenv import load_dotenv

class MongoDB():

    def __init__(self):
        load_dotenv()
        db_uri = os.getenv("MONGODB_URI")
        db_name = "new2312_db"
        collection_name = "new2312_collection"
        self.client = MongoClient(db_uri, tls=True, tlsAllowInvalidCertificates=True)
        self.db = self.client[db_name]
        self.collection = self.db[collection_name]
