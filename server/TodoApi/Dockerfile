FROM mcr.microsoft.com/dotnet/sdk:10.0

WORKDIR /src

COPY TodoApi.csproj .

RUN dotnet restore

COPY . .

EXPOSE 7501

ENV ASPNETCORE_URLS=http://+:7501

CMD ["dotnet", "watch", "run", "--no-launch-profile", "--urls", "http://+:7501"]