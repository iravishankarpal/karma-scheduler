export async function config() {
    const CREDENTIALS_PATH = path.join(process.cwd(), "config/credentials.json");
    const credentials = JSON.parse(await fs.readFile(CREDENTIALS_PATH, "utf-8"));

    return {
        credentials,
    };
}