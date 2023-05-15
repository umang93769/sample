import boto3

session = boto3.Session(
    aws_access_key_id='<your_access_key>',
    aws_secret_access_key='<your_secret_key>',
    region_name='<your_region>'
)

ec2 = session.resource('ec2')

instance = ec2.create_instances(
    ImageId='ami-0c94855ba95c71c99',
    InstanceType='t2.micro',
    KeyName='my-key-pair',
    SecurityGroupIds=['sg-0123456789abcdef0'],
    SubnetId='subnet-0123456789abcdef',
    MaxCount=1,
    MinCount=1
)

print(instance[0].id)