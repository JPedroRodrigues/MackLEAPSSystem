import UserForm from "@/components/UserForm";
import Nav from "@/components/Nav";

export default function RegisterUser() {
    return (<>
        <Nav />
        <main className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[9.375em 1fr 9.375em] bg-background">
            <section className="flex justify-between row-start-1 col-start-2 mb-3">
                <h1 className="self-baseline text-5xl font-extrabold text-primary">Edição - Usuários</h1>
            </section>

            <div className="row-start-2 col-start-2 self-center justify-self-center min-w-[70em] max-w-[80em] rounded-3xl p-12 m-auto text-card-foreground bg-card shadow-xl">
                <UserForm />
            </div>
        </main>
    </>)
}