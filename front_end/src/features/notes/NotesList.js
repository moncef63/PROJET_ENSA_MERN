import { useGetNotesQuery } from "./notesApiSlice"
import Note from "./Note"

const NotesList = () => {
    const {
        data: notes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNotesQuery()

    let content

    if (isLoading) content = <p>Chargement...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = notes

        const tableContent = ids?.length
            ? ids.map(noteId => <Note key={noteId} noteId={noteId} />)
            : null

        content = (
            <table className="table table--notes">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th note__status">Utilisateur</th>
                        <th scope="col" className="table__th note__created">Créé</th>
                        <th scope="col" className="table__th note__updated">mis à jour</th>
                        <th scope="col" className="table__th note__title">Titre</th>
                        <th scope="col" className="table__th note__username">Propriétaire</th>
                        <th scope="col" className="table__th note__edit">Modifier</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default NotesList