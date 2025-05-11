# AWS Static Website with Custom Domain

**Deployed a secure, scalable static website using:**  
- AWS S3 (hosting)  
- CloudFront CDN (HTTPS + global caching)  
- Custom domain (purchased via Namecheap, managed with Route 53)  

## Key Steps
1. **Domain Setup**  
   - Purchased domain on Namecheap.  
   - Configured Route 53 nameservers (`ns-xxx.awsdns-xx.com`) in Namecheap DNS settings.  

2. **AWS Infrastructure**  
   - Created S3 bucket with static website hosting.  
   - Provisioned CloudFront distribution with HTTPS (ACM certificate).  
   - Linked Route 53 A-record to CloudFront (`example.com` → `d123.cloudfront.net`).  

3. **Security**  
   - Enforced HTTPS-only traffic.  
   - Added S3 bucket policy to restrict public access.
   - Restrict bucket access to only CloudFront.
