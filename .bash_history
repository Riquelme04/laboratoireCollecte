apt update
apt dist-upgrade -y
init 6
apt update && apt upgrade -y
apt install -y git htop curl wget unzip zip jq build-essential pkg-config ca-certificates
apt install -y openjdk-17-jdk-headless
curl -fsSL https://deb.nodesource.com/setup_24.x | bash -
apt install -y nodejs
curl -fsSL https://deb.nodesource.com/setup_24.x | bash -
apt install -y nodejs
apt install -y python3 python3-pip python3-venv python3-dev
pip3 install --no-cache-dir --break-system-packages     pandas     numpy     pyarrow     scikit-learn     pyspark
wget https://archive.apache.org/dist/spark/spark-3.5.1/spark-3.5.1-bin-hadoop3.tgz -P /tmp
tar -xzf /tmp/spark-3.5.1-bin-hadoop3.tgz -C /opt
mv /opt/spark-3.5.1-bin-hadoop3 /opt/spark
rm /tmp/spark-3.5.1-bin-hadoop3.tgz
cat << 'EOF' > /etc/profile.d/spark.sh
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export SPARK_HOME=/opt/spark
export PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin
EOF

chmod +x /etc/profile.d/spark.sh
source /etc/profile.d/spark.sh
git --version
node -v
npm -v
python3 --version
java -version
pyspark --version
cat << 'EOF' > /etc/profile.d/spark.sh
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export SPARK_HOME=/opt/spark
export PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin
export PYSPARK_PYTHON=/usr/bin/python3
export PYSPARK_DRIVER_PYTHON=/usr/bin/python3
export PYTHONPATH=$SPARK_HOME/python:$SPARK_HOME/python/lib/py4j-0.10.9.7-src.zip:$PYTHONPATH
EOF

source /etc/profile.d/spark.sh
python3 -c "import pyspark, pandas, numpy, pyarrow, sklearn; print('PySpark version:', pyspark.__version__)"
source /etc/profile.d/spark.sh
git --version
node -v
npm -v
python3 --version
java -version
pyspark --version
spark-submit --version
python3 -c "import pyspark, pandas, numpy, pyarrow, sklearn; print('PySpark version:', pyspark.__version__)"
sed -i 's/from pyspark.util import spark_connect_mode/import pyspark.sql.connect/g' /opt/spark/bin/pyspark
source /etc/profile.d/spark.sh
git --version
node -v
npm -v
python3 --version
java -version
spark-submit --version
python3 -c "import pyspark, pandas, numpy, pyarrow, sklearn; print('PySpark:', pyspark.__version__, '| Pandas:', pandas.__version__, '| NumPy:', numpy.__version__, '| PyArrow:', pyarrow.__version__, '| Sklearn:', sklearn.__version__)"
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-8.0.list
apt update
apt install -y mongodb-mongosh
mongosh --version
nano /etc/ssh/sshd_config
exit
source /etc/profile.d/spark.sh
python3 -c "import pyspark, pandas, numpy, pyarrow, sklearn; print('PySpark:', pyspark.__version__, '| Pandas:', pandas.__version__, '| NumPy:', numpy.__version__, '| PyArrow:', pyarrow.__version__, '| Sklearn:', sklearn.__version__)"
mongosh -version
git -version
git --version
node -v
python3 --version
java -version
spark-submit --version
àPyspark -v
àPyspark -version
àPyspark --version
àPyspark --versionpandas -version
mongosh --version
systemctl stop mongod 2>/dev/null
systemctl disable mongod 2>/dev/null
apt purge -y mongodb-org* mongodb-mongosh mongodb*
rm -rf /var/lib/mongodb
rm -rf /var/log/mongodb
rm -rf /etc/mongod.conf
rm -rf /etc/systemd/system/mongod.service.d
rm -rf /etc/apt/sources.list.d/mongodb*.list
rm -rf /etc/apt/keyrings/mongodb*
systemctl daemon-reload
apt autoremove -y
apt clean
mongosh --version
hash -r
mongosh --version
apt update && apt install -y ca-certificates curl gnupg
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc
echo   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" |   tee /etc/apt/sources.list.d/docker.list > /dev/null
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
systemctl enable --now docker
docker --version
docker compose version
ls
java -v
java --v
java -version
python 3 -v
python3 -v
history
#˜
Pyspark --version
Pyspark -version
source /etc/profile.d/spark.sh
git -version
git --version
node -v
python3 --version
java -version
spark-submit --version
mongosh --version
systemctl status mongod
mongosh --version
apt update
free -h
htop
exit
curl -i http://localhost:3000
nest generate module health
nest generate controller health --no-spec
npm i -g @nestjs/cli
nest new energy-api
npm run start:dev
npm run build
npm run start
cd ~/projets/energy-api
cd ~/Projects/energy-api
npm run start
git switch main
git pull
git status
git log -1 --oneline
git check-ignore -v node_modules
git check-ignore -v dist
git check-ignore -v .env
git pull
git switch master
git log -1 --oneline
git switch -c feature/s01-architecture-initiale
git branch --show-current
git status
git branch --show-current
git status
git diff master...HEAD
npm run start
git switch -c feature/s01-architecture-initiale
git branch --show-current
git status
git add .
git diff master...HEAD
git commit -m "chore: initialisation du projet nestjs energy-api"
git diff master...HEAD
git diff
npm run start:dev
git rojects
git Projects
cd  Projects
clear
git add .
git push
git config --global user.name "Riquelme04"
git config --global user.email "6176721@collegemv.qc.ca"
git remote add origin https://github.com/Riquelme04/laboratoireCollecte.git
cd ~/Projects/energy-api
git remote add origin https://github.com/Riquelme04/laboratoireCollecte.git
git push
git push --set-upstream origin feature/s01-architecture-initiale
git checkout master
git checkout -b master
git add .
git commit -m "chore: initialisation du projet energy-api"
git push
git pull
git check-ignore -v node_modules
git check-ignore -v dist
git check-ignore -v .env
git init
git check-ignore -v .env
git check-ignore -v node_modules
git check-ignore -v dist
git check-ignore -v .env
cd ~/projects/energy-api
git status
git remote -v
git add .
git pull
git status
git log -1 --oneline
git add .
git check-ignore -v node_modules
git check-ignore -v dist
git check-ignore -v .env
nest generate module health
nest generate controller health --no-spec
curl -i http://localhost:3000/api/health
npm run start:dev
npm run start
npm run start:dev
find / -name package.json -not -path "/proc/*" -not -path "/sys/*" 2>/dev/null
npm install
npm run start:dev
pwd
ls -la
find /root -maxdepth 3 -name package.json 2>/dev/null
cd /root/Projects/energy-api
npm install
npm run start:dev
cd /root/Projects/energy-api
ls -la src
cat src/app.module.ts
git status
git add .
npm run start:dev
curl -i http://localhost:3000
npm run start:dev
git add .
git push
git commit -m " cree module health"
git push
curl -i http://localhost:3000
