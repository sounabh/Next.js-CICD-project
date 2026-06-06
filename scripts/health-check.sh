#!/bin/bash

URL=$1
MAX_ATTEMPTS=30
SLEEP_TIME=2

echo "🔍 Starting health check for $URL"

for i in $(seq 1 $MAX_ATTEMPTS); do
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" $URL/api/health || echo "000")
    
    if [ "$HTTP_CODE" = "200" ]; then
        echo "✅ Health check passed! Application is running."
        exit 0
    fi
    
    echo "Attempt $i/$MAX_ATTEMPTS - Status: $HTTP_CODE - Retrying in ${SLEEP_TIME}s..."
    sleep $SLEEP_TIME
done

echo "❌ Health check failed after $MAX_ATTEMPTS attempts"
exit 1